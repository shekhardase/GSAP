# Part 2: Scroll Triggers in GSAP

In this part, we learned about the following new features of Scroll Triggers:

1. **Basic Setup**: How to initialize ScrollTrigger and link it to animations.
2. **Trigger Element**: Setting the element that triggers the animation.
3. **Start and End Points**: Defining when the animation should start and end based on scroll position.
4. **Pinning**: How to pin elements during scroll to create a fixed effect.
5. **Scrub**: Synchronizing the animation progress with the scrollbar position.
6. **Markers**: Using markers to visualize start and end points during development.

Refer to `script.js` for detailed examples and implementation.

```javascript
// Example of a basic ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);

gsap.to(".element", {
  scrollTrigger: {
    trigger: ".element",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true,
  },
  x: 500,
});
```
