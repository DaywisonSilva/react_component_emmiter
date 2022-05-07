import { useEffect, useState } from "react";
import toggleDialogEmmiter from "../../events/toggle-dialog.event";
import {
  StyledDialog,
  StyledDialogFooter,
  StyledOverlay,
} from "./Dialog.styles";

function Dialog() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    toggleDialogEmmiter.on("show", ({ state, image }) => {
      setOpen(state);
      setImage(image);
    });
  }, []);

  return (
    <div className={open ? StyledOverlay() : ""} onClick={() => setOpen(false)}>
      {open && (
        <div
          className={StyledDialog({ backgroundImage: image || "" })}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={StyledDialogFooter()}>Lorem Impsum Dolor</div>
        </div>
      )}
    </div>
  );
}

export default Dialog;
