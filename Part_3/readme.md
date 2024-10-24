# Part 3: SVG Animations and Styles in GSAP

## SVG Animations

1. **Basic SVG Animation**: Learn how to target and animate SVG elements.
2. **Morphing**: Transform one SVG shape into another.
3. **Drawing**: Animate the drawing of SVG strokes.
4. **Filling**: Animate the fill color of SVG elements.

## Applying Styles

1. **CSS Properties**: Animate CSS properties like `opacity`, `transform`, etc.
2. **Classes**: Toggle classes to apply predefined styles.
3. **Responsive Animations**: Create animations that adapt to different screen sizes.

Refer to `svgScript.js` for detailed examples and implementation.

```javascript
// Example of animating an SVG element
gsap.to("#mySVG", {
  duration: 2,
  x: 100,
  fill: "#ff0000",
  ease: "power2.inOut",
});

// Example of morphing an SVG path
gsap.to("#myPath", {
  duration: 2,
  morphSVG: "#newPath",
  ease: "power2.inOut",
});
```
