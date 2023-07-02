import React, { useState } from "react";
import { Card, CardMedia } from "@mui/material";
import ImageInfoDialog from "./ImageInfoDialog";
import { useMediaQuery } from "@mui/material";

const CustomCard = ({ image }) => {
  const [isImageInfoOpen, setIsImageInfoOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleImageInfoOpen = () => {
    setIsImageInfoOpen(!isImageInfoOpen);
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: isDesktop ? "transform 0.15s ease-in-out" : "none",
          "&:hover": isDesktop ? { transform: "scale3d(1.05, 1.05, 1)" } : {},
          cursor: "pointer",
        }}
        onClick={handleImageInfoOpen}
      >
        <CardMedia
          component="div"
          image={image.largeImageURL}
          sx={{
            pt: "56.25%",
          }}
        />
      </Card>

      <ImageInfoDialog
        image={image}
        open={isImageInfoOpen}
        handleImageInfoOpen={handleImageInfoOpen}
      />
    </>
  );
};

export default CustomCard;
