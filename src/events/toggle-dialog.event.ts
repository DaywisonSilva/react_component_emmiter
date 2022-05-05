import mitt from "mitt";

type DialogEvents = {
  show: boolean;
  hide: boolean;
};

const toggleDialogEmmiter = mitt<DialogEvents>();

export default toggleDialogEmmiter;
