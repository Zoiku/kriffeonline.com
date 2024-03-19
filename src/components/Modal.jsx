import "../styles/Modal.css";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Modal = ({ open, handleClose, children, header }) => {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={"modal-box"}>
        {header && (
          <div className="modal-header">
            <div>{header}</div>
            <div>
              <IconButton size="small" onClick={handleClose}>
                <CloseRoundedIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        )}
        <div className="modal-body">{children}</div>
      </Box>
    </MuiModal>
  );
};

export default Modal;
