import Modal from "../components/Modal";
import Drawer from "../components/Drawer";
import useScreen from "../hooks/useScreen";

const ResponsiveModal = ({
  open,
  handleClose,
  handleOpen,
  children,
  header,
}) => {
  const { isDesktop } = useScreen();

  return isDesktop ? (
    <Modal header={header} open={open} handleClose={handleClose}>
      {children}
    </Modal>
  ) : (
    <Drawer
      header={header}
      anchor={"bottom"}
      handleClose={handleClose}
      open={open}
      handleOpen={handleOpen}
    >
      {children}
    </Drawer>
  );
};

export default ResponsiveModal;
