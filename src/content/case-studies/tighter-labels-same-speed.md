---
title: "Tighter Labels, Same Speed"
tagline: "Rotated bounding boxes in an ML annotation tool"
description: "I built a reusable annotation library with oriented bounding boxes and resize/rotate handles. The interesting part wasn't the rotation — it was not taxing the throughput that makes annotation economically viable."
domain: "ML infrastructure"
reflection_label: "What I'd watch"
order: 2
slug: "tighter-labels-same-speed"
ogImage: "/rotated-vs-axis-aligned.svg"
---

*Building rotation into an annotation library — buying label accuracy without spending the throughput that pays for it.*

Annotation quality is the ceiling on model quality. Whatever noise is in the labels, the model inherits and amplifies — so an annotation tool isn't really a labeling product, it's a *data-accuracy* product. The tool used standard axis-aligned bounding boxes, and those have a built-in flaw: an angled object gets wrapped in an upright rectangle, and everything in the corners that *isn't* the object gets labeled as if it were. That gap is systematic label noise, worst exactly where objects sit at an angle.

I built the annotation library the service imported — bounding boxes with handles for resize and rotation — so a box could be oriented to an object's true angle instead of settling for a loose upright wrapper. I was told at the time that rotated boxes weren't common in other annotation tools, though I didn't verify that against the market myself.

![Side-by-side](/rotated-vs-axis-aligned.svg)

## The bet.

A rotated box is more accurate and more expensive to draw. An axis-aligned box is roughly two clicks. A rotated one also asks for an angle to be judged and set — more decisions, more time per box. And on a rotation project, that cost isn't occasional: every box in the job carries it. So anything that slows the per-box interaction doesn't just cost seconds; it multiplies across every label in the project, and a clumsy rotation control could quietly introduce a *new* class of error.

So the design problem wasn't "rotation is more accurate" — that part's obvious. It was that the accuracy gain only survives if setting the angle stays fast enough to barely register, because on a rotation job it's paid on every box, not now and then. The feature lived or died on the ergonomics of the handle, not on the math of tighter boxes. That's what I was really building: a transform control precise enough to be worth using and light enough not to tax the speed that makes annotation economically viable.

## What shipped.

A reusable library the service imported, with oriented bounding boxes and a rotation-and-resize handle — so on projects with angled objects, every box could be fit to the object's real orientation instead of accepting the corner noise an upright box leaves behind.

One thing I want to be straight about: whether a project used rotation was usually decided up front, as a requirement of that labeling job — not something each annotator chose box by box. So this isn't a story about annotators discovering the feature and adopting it selectively. It's a primitive that projects with oriented objects could be built on, and the work was making that primitive accurate without making it slow. I didn't instrument per-box time, so I can't put a number on "same speed" — the claim is that the handle was designed not to add a step that annotators would feel, not a measured throughput result.

## What I'd watch.

Because rotation is scoped at the project level, the thing worth watching isn't annotator habit — it's project scoping. Oriented boxes are only worth their cost on jobs whose objects are genuinely angled; specced onto a project of upright objects, they'd add effort for no accuracy gain. So the health question is upstream: is rotation being required on the projects that actually need it, and left off the ones that don't? The win — a tighter fit without a throughput hit — only holds as long as the feature is pointed at the cases that justify it, and that decision lives in how projects are set up, not in how individual boxes get drawn.

## Looking back.

This was the most recent thing I built before I went independent. The part I'd still defend isn't the rotation itself — it's treating an annotation tool as a data-accuracy product and recognizing that the accuracy gain was only real if it didn't cost the throughput the whole operation runs on. The hard problem was never "can a box rotate." It was "can it rotate without making every box slower to draw."