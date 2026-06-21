---
title: "The Quote Is a Promise"
tagline: "Instant address-based quoting for last-mile delivery"
description: "My first project as a developer: replacing a slow manual quoting step with an instant lookup against the ops team's price table — and routing the cases it couldn't match to a human instead of guessing."
domain: "Logistics"
reflection_label: "What I'd watch"
order: 3
slug: "quote-is-a-promise"
ogImage: "/before-and-after.png"
---

*Replacing a wait-for-a-callback quote with an instant one — my first project as a developer.*

This was the first thing I built as a developer. On a last-mile delivery platform, getting a price meant asking for a quote and waiting: a customer submitted a request, someone priced it by hand, and a number came back later. That wait landed at the worst possible moment — the instant a customer is deciding whether to commit — and every delay there quietly costs you the people with the most intent.

The fix was less glamorous than the wait made it look. The ops team already maintained a price table by zone. What didn't exist was a way for a customer to reach that number without a human in the loop. So I built the path that takes the addresses a customer enters, matches them against that table, and returns the price on the spot. The pricing itself was the ops team's work; what I added was the instant lookup and the flow around it.

![Before/after of the quote flow](/before-and-after.png)

## The one judgment call I'd still defend.

There was a decision in here that was mine, and it's the part of this project I'm actually proud of. A delivery quote isn't a suggestion — the moment the platform shows a number, it's on the hook for it. So the real question wasn't just "can I return a price fast." It was "what does the system do when it *can't* cleanly match the addresses to a row in the table." The easy answer is to show a best guess. I didn't want to, because a fast quote the platform can't honor is worse than a slow one. So anything that didn't match cleanly routed to a person instead of guessing. The instant path took the clean cases; a human still caught the rest.

I want to be precise about the size of that: it's not a confidence-scoring engine or a pricing model. It's a guardrail — match cleanly or hand it to a human — and choosing it over "just return something" was the judgment, not the machinery.

## What shipped.

For clean matches, quoting went from "submit and wait" to a price on screen at the moment of intent, and the manual pricing step stopped being something every customer queued behind. The cases the table couldn't cleanly answer still went to a person — by design, not by accident.

I didn't instrument this, so I can't give a clean rate — but in practice the large majority of orders cleared the instant path without ever touching a person. The fallback stayed the exception, which is exactly the condition the design depends on.

## What I'd watch.

The fallback is only a win while the share of quotes needing a human stays low. If it creeps up, the bottleneck I removed doesn't vanish — it just relocates to a smaller queue. So the number I'd keep an eye on isn't speed, it's what percentage of quotes still need a person. That's the early warning that the instant path is covering less than it looks like it is.

## Looking back.

It was my first project, and in hindsight the useful lesson wasn't the lookup — it was noticing that "automate the quote" and "automate the *price*" are different problems. I automated the delivery of a price the ops team already stood behind. Computing a trustworthy price from scratch would have been a much harder problem, and the design is better for not pretending otherwise: the clean cases got faster, the hard cases stayed human, and nobody got a number the platform couldn't keep.
