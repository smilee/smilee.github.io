---
title: "Tighter Labels, Same Speed"
tagline: "Rotated bounding boxes in an ML annotation tool"
description: "Rotated bounding boxes were the easy part. The real bet was buying label accuracy without spending the annotation throughput that pays for it."
domain: "ML Infrastructure"
reflection_label: "What I'd watch"
order: 3
slug: "tighter-labels-same-speed"
---

*Adding rotation to bounding boxes in an annotation tool — buying label accuracy without spending the throughput that pays for it.*

Annotation quality is the ceiling on model quality. Whatever noise is in the labels, the model inherits and amplifies — so an annotation tool isn't really a labeling product, it's a *data-accuracy* product. The tool used standard axis-aligned bounding boxes, and those have a built-in flaw: an angled object gets wrapped in an upright rectangle, and everything in the corners that *isn't* the object gets labeled as if it were. That gap is systematic label noise, worst exactly where objects sit at an angle. I implemented rotation for bounding boxes so a box could match an object's true orientation.

## The bet.

The feature sounds purely additive — of course a box that rotates is more accurate. But the real decision was a tradeoff, and naming it is the point: *better labels cost more operator effort per box.* An axis-aligned box is two clicks. A rotated one asks the annotator to also judge and set an angle — more decisions, more time, more chances to fumble. And annotation runs at scale, so anything that slows the per-box interaction doesn't just cost seconds; it multiplies across every label and can quietly introduce a *new* category of error if the rotation control is awkward to use.

So the bet wasn't "rotation is more accurate" — that part's obvious. It was that the accuracy gain on angled objects would outweigh the throughput cost *only if* the rotation interaction stayed fast enough that annotators barely felt it. The feature lived or died not on the math of tighter boxes but on the ergonomics of setting the angle. I bet I could add the capability without taxing the speed that makes annotation economically viable.

## What shipped.

Rotation for bounding boxes — annotators could orient a box to an object's true angle instead of settling for a loose upright wrapper, giving a tighter fit on exactly the angled cases where axis-aligned boxes leaked the most accuracy, and doing it without a throughput hit. The adoption pattern was the tell that the bet paid off: annotators reached for rotation on the cases that needed it and left it alone on the ones that didn't — the feature earned its place without becoming a tax on every box.

## What I'd watch.

Rotation is only worth its cost on object classes that are actually angled. The thing to watch is annotators using it everywhere out of habit — setting an angle on boxes that never needed one and quietly slowing themselves down for zero accuracy gain. So the health signal isn't whether people *use* rotation, it's whether they use it *selectively*: matched to the classes where orientation carries real information. The win was a tighter fit at no throughput cost, and that only holds as long as the feature stays pointed at the cases that justify it.
