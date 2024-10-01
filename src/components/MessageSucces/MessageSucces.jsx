/* eslint-disable react/prop-types */

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageSuccess = ({ purchaseID }) => {
  return (
    <Stack
      sx={{ width: "100%" }}
      spacing={2}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <Alert severity="success" style={{ fontSize: 20, width: "90%", textAlign: "center" }}>
        Gracias por su compra! su id de transacción es: {purchaseID}
      </Alert>
    </Stack>
  );
};

export default MessageSuccess;
