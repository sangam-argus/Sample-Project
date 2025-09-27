import { Alert, Snackbar } from "@mui/material";

function Toast({
  open,
  handleClose,
  message,
  severity
}: {
  open: boolean;
  handleClose: (data: boolean) => void;
  message: string;
  severity:string
}) {
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => handleClose(true)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => handleClose(true)}
          severity={severity==="error"?"error":"success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Toast;
