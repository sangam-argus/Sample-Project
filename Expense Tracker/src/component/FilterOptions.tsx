import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { type filterOptions, initialFilterOption } from "../utils/Types";
import Toast from "./Toast";
import { useEffect } from "react";

function FilterOptions() {
  const [filterOption, setFilterOption] =
    useState<filterOptions>(initialFilterOption);
  const { setFilter , filter} = useContext(GlobalContext);
  const [showToast, setShowtoast] = useState(false);

  useEffect(()=>{
    if(filterOption!==initialFilterOption){

    setShowtoast(true)
    }
  },[filter])

  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setFilterOption((prev) => ({
        ...prev,
        value: newValue,
      }));
    }
  };

  const handleChange = (e: SelectChangeEvent) => {
    setFilterOption((prev) => ({
      ...prev,
      type: e.target.value,
    }));
  };

  const handleSubmitFilter = () => {
    if (filterOption === initialFilterOption) {
      return;
    } else {
      setFilter(filterOption);
    }
  };

  return (
    <>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "10px",
          gap: "10px",
          paddingInline: "60px",
        }}
      >
        <FormControl variant="filled">
          <InputLabel id="demo-simple-select-filled-label">
            Filter by
          </InputLabel>
          <Select value={filterOption.type} onChange={handleChange}>
            <MenuItem value="all">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"date"}>Date</MenuItem>
            <MenuItem value={"month"}>Month</MenuItem>
            <MenuItem value={"year"}>Year</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {filterOption.type === "date" && (
            <DatePicker
              label={"Choose Date"}
              views={["year", "month", "day"]}
              value={filterOption.value}
              onChange={handleDateChange}
            />
          )}
          {filterOption.type === "month" && (
            <DatePicker
              label={"Choose Month"}
              views={["month"]}
              value={filterOption.value}
              onChange={handleDateChange}
            />
          )}
          {filterOption.type === "year" && (
            <DatePicker
              label={"Choose Year"}
              views={["year"]}
              value={filterOption.value}
              onChange={handleDateChange}
            />
          )}
        </LocalizationProvider>
        <Button variant="contained" onClick={handleSubmitFilter}>Submit</Button>
      </Grid>
      <Toast
        open={showToast}
        message={`Your Data has been changes according to ${filterOption.type}`}
        handleClose={() => setShowtoast(false)}
        severity={"success"}
      />
    </>
  );
}

export default FilterOptions;
