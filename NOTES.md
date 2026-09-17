# Notes

> Fill this in as you work. This document is assessed alongside your code.

## Bugs I found

For each: what was wrong, **why** it was wrong, and how I fixed it.

1. after running the application using npm run dev in network tab i find out that its calling the api again and again and it is because of the use effect dependensies so i have removed it from there.
2. removing any and using product type in useproduct.ts for better type saftey.
3. added rating in interface of products , added temporary error msg for api failiure.
4. founded hydration issue in console because of date.now function rendering directly on server and fixed it using use effect.
5. filter logic was wrong and there was case-sensitivity issue while comparing and fixed that.  
6.added product.id  as a key to map product data.

## Features I completed

- 1st todo adone added a visually good error msg.

- animating the modal is also done. its smoth and it feels like its popping out.

## Decisions

Anywhere I had to choose between options — and why I chose what I did.

-

## With more time

What I'd improve or add next.

-
