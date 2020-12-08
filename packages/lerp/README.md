# @resir014/lerp

> Simple linear interpolation.

## Install

```bash
# yarn
$ yarn add @resir014/lerp
# npm
$ npm i @resir014/lerp
```

## The problem

You're working on an article page for a content-heavy site, and you were tasked with two things.

First, you needed to implement a "scroll to" feature in your article page, which will scroll the reader into a certain percentage of an article's content.

Secondly, you needed to create a "progress bar", showing your visitors how far in an article they are.

![progress-bar](images/progress-bar.gif)

But in the design handed into you, the content is located not quite above the fold. This means finding the value between two arbitrary `window.scrollY` values in your page.

How would you go about doing that?

## The solution

Linear interpolation! It's the fancy mathematics term to measure a value between a certain range (e.g. 25-100), but it's a perfect solution to the problem mentioned above.

For more interesting uses of linear interpolation, [read this Twitter thread](https://twitter.com/mattdesl/status/1031305279227478016) by Matt DesLauriers, and [this blog post](https://www.trysmudford.com/blog/linear-interpolation/).

## Usage

```ts
import { lerp, lerpInverse } from '@resir014/lerp'

// Gets the '50% position' value between 1 and 2.
lerp(1, 2, 0.5) // 1.5
// Gets the percentage of a value between 1 and 2.
lerpInverse(1.5, 1, 2) // 0.5 (50%)
```

## Helper functions

Sometimes, when you're performing `lerpInverse` calculations, the percentage value returned could be either bigger, or smaller than what was intended. To help mitigate this, a `clamp` function is provided.

```ts
import { clamp } from '@resir014/lerp'

// clamp a value between a min-max range.
clamp(1.1, 0, 1) // 1
clamp(-0.2, 0, 1) // 0
clamp(0.5, 0, 1) // 0.5
```
