import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const ImageInfoDialog = ({ image, open, handleImageInfoOpen }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <Dialog onClose={handleImageInfoOpen} open={open}>
      <Card sx={{ width: isDesktop ? 445 : 350 }}>
        <CardMedia
          sx={{ minHeight: 240 }}
          image={image.largeImageURL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Likes: {image.likes}
          </Typography>
          <Typography gutterBottom variant="h5">
            Views: {image.views}
          </Typography>
          <Typography gutterBottom variant="h5">
            Comments: {image.comments}
          </Typography>
          <Typography gutterBottom variant="h5">
            Downloads: {image.downloads}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleImageInfoOpen()}>
            Close
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default ImageInfoDialog;
