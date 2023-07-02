import { Box, Container, Grid, Typography } from "@mui/material";
import CustomCard from "./Card";
import ActionButtons from "./ActionButtons";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Main = () => {
  const images = useSelector((state) => state.image.images);
  const isLoading = useSelector((state) => state.image.isLoading);

  return (
    <main>
      <Box
        sx={{
          pt: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            MSApps Assignment
          </Typography>
          <ActionButtons images={images} />
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4} sx={{ position: "relative" }}>
          {isLoading && <Loader loadingState={isLoading} />}
          {images?.hits?.map((image) => (
            <Grid item key={image.id} xs={12} sm={6} md={4}>
              <CustomCard image={image} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Main;
