import toggleDialogEmmiter from "../../events/toggle-dialog.event";

const showDialog = ({ image }: { image: string }) => {
  toggleDialogEmmiter.emit("show", { state: true, image });
};

const hideDialog = () => {
  toggleDialogEmmiter.emit("hide", false);
};

export { showDialog, hideDialog };
