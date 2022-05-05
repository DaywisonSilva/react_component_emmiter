import { css, keyframes } from "@stitches/core";

const scale = keyframes({
  "0%": { transform: "scale(.3)" },
  "100%": { transform: "scale(1)" },
});

const StyledOverlay = css({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: "#0007",

  display: "grid",
  placeContent: "center",
});

const StyledDialog = css({
  width: "80vw",
  height: "80vh",
  maxWidth: "400px",
  maxHeight: "700px",
  backgroundColor: "#fff4",
  backdropFilter: "blur(4px)",
  borderRadius: 10,
  backgroundImage: "url('./image-dialog.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  animation: `${scale} 400ms ease-in-out forwards`,
});

const StyledDialogFooter = css({
  position: "absolute",
  left: "2.5%",
  bottom: "2.5%",
  width: "95%",
  height: "70px",
  backdropFilter: "blur(4px)",
  backgroundColor: "#fff1",
  borderRadius: 10,
  color: "white",
  display: "flex",
  alignItems: "center",
  padding: "10px",
  boxSizing: "border-box",
});

export { StyledOverlay, StyledDialog, StyledDialogFooter };
