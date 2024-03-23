import { forwardRef } from "react";
import Button from "@mui/material/Button";
import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Dialog = ({ open, handleClose, handleAgree, content, title }) => {
  return (
    <MuiDialog
      PaperProps={{ elevation: 0 }}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color={"common"} onClick={handleClose}>
          Disagree
        </Button>
        <Button color={"common"} onClick={handleAgree}>
          Agree
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
