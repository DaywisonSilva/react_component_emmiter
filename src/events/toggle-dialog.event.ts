import mitt from "mitt";

type DialogEvents = {
  show: { state: boolean; image: string };
  hide: boolean;
};

const toggleDialogEmmiter = mitt<DialogEvents>();

export default toggleDialogEmmiter;
