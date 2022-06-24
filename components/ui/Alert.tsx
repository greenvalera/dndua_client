import {FC} from "react";
import {Alert as MuiAlert, Snackbar} from "@mui/material";

enum Severity {
  success = "success",
  warning = "warning",
  info = "info",
  error = "error",
}

interface Props {
  handleClose?: () => {},
  open: boolean,
  message: string,
  severity: Severity,
}

const Alert: FC<Props> = ({handleClose, open, severity, message}) => {
  return  (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert severity={severity} onClose={handleClose} sx={{ width: '100%' }} variant="filled">
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default Alert;