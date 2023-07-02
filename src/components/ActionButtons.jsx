import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { categories } from "../constants/categories";
import { per_page } from "../constants/pagination";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/image/imageAsyncActions";
import { buildParams } from "../utils/methods";

const ActionButtons = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();

  const totalPages = Math.ceil(images.totalHits / per_page);

  useEffect(() => {
    dispatch(fetchData(buildParams(currentPage, category)));
  }, [currentPage, category, dispatch]);

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <Stack sx={{ pt: 4 }} direction="row" spacing={3} justifyContent="center">
      <Button
        variant="contained"
        color="error"
        onClick={handlePrev}
        disabled={currentPage < 2}
      >
        Prev
      </Button>
      <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">CATEGORY</InputLabel>
          <Select
            value={category}
            label="CATEGORY"
            onChange={handleCategoryChange}
            color="secondary"
          >
            {categories.map((category) => (
              <MenuItem value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        color="info"
        onClick={handleNext}
        disabled={currentPage > totalPages}
      >
        Next
      </Button>
    </Stack>
  );
};

export default ActionButtons;
