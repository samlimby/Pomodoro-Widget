(() => {
  // widget-src/code.tsx
  var { widget } = figma;
  var { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;
  function Widget() {
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      height: "hug-contents",
      padding: 8,
      fill: "#FFFFFF",
      cornerRadius: 8,
      spacing: 12
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 32,
      horizontalAlignText: "center"
    }, "Hello Widgets"));
  }
  widget.register(Widget);
})();
