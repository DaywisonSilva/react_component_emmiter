import toggleDialogEmmiter from "../../events/toggle-dialog.event";

const onShowDialog = () => {
  toggleDialogEmmiter.emit("show", true);
};

const onHideDialog = () => {
  toggleDialogEmmiter.emit("hide", false);
};

export { onShowDialog, onHideDialog };
