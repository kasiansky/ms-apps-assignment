import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = ({ loadingState }) => {
  return (
    loadingState && (
      <Box
        sx={{
          position: "absolute",
          zIndex: 99999,
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.6)",
          right: 0,
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress
          sx={{
            circle: {
              strokeLinecap: "round",
              animationDuration: "2s",
              color: "#5FC5D7",
            },
          }}
          thickness={6.5}
          size={100}
        />
      </Box>
    )
  );
};

export default Loader;
