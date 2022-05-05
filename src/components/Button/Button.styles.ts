import { css } from "@stitches/core";

const StyledButton = css({
  backgroundColor: "#005cdd",
  width: 100,
  height: 45,
  borderRadius: 8,
  color: "White",
  fontSize: 18,
  cursor: "pointer",
  transition: "all .2s ease-in",
  outline: "none",
  border: "none",
  boxShadow: "0px 0px 20px #005cddaa",

  "&:hover": {
    opacity: 0.8,
  },

  "&:active": {
    transform: "scale(.8)",
  },
});

export { StyledButton };
