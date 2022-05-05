import { useEffect, useState } from "react";
import toggleDialogEmmiter from "../../events/toggle-dialog.event";
import {
  StyledDialog,
  StyledDialogFooter,
  StyledOverlay,
} from "./Dialog.styles";

function Dialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    toggleDialogEmmiter.on("show", (value) => {
      setOpen(value);
    });
  }, []);

  return (
    <div className={open ? StyledOverlay() : ""} onClick={() => setOpen(false)}>
      {open && (
        <div className={StyledDialog()} onClick={(e) => e.stopPropagation()}>
          <div className={StyledDialogFooter()}>Lorem Impsum Dolor</div>
        </div>
      )}
    </div>
  );
}

export default Dialog;
