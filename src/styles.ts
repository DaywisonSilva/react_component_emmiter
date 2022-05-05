import { globalCss } from "@stitches/core";

const globalStyles = globalCss({
  "html, body": {
    margin: 0,
    padding: 0,
    fontFamily: "sans-serif",
  },
  body: {
    width: "100%",
    height: "100vh",
    minHeight: 400,
    backgroundImage: "url('./background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "left center",
  },
});

export default globalStyles;
