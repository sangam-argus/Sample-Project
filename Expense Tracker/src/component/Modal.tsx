import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { intialTransaction, type Transaction } from "../utils/Types";
import { GlobalContext } from "../context/GlobalContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { Dayjs } from "dayjs";
import { modalStyle } from "../utils/style";
import Toast from "./Toast";

export default function BasicModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: (data: boolean) => void;
}) {
  const [transaction, setTransaction] =
    useState<Transaction>(intialTransaction);
  const [error,setError]=useState<string>('')
  const [showToast,setShowtoast]=useState(false)
  const { handleAddTransaction } = useContext(GlobalContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTransaction((prevData) => ({
      ...prevData,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };
  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setTransaction((prev) => ({
        ...prev,
        date: newValue,
      }));
    }
  };
  const handleTransaction = () => {
    if(transaction.description==='' || transaction.amount===''){
      setError("Please Fill all the required fields")
      setShowtoast(true)
      return;
    }
    handleAddTransaction(transaction);
    setTransaction(intialTransaction);
    handleClose(true);
  };
  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleClose(true)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          X
        </Button>

        <TextField
          required
          fullWidth
          margin="normal"
          name="description"
          label="Enter Description"
          placeholder="Enter Description..."
          value={transaction.description}
          onChange={handleChange}
        />

        <TextField
          required
          fullWidth
          margin="normal"
          name="amount"
          label="Enter Amount"
          placeholder="Enter Amount..."
          value={transaction.amount}
          onChange={handleChange}
        />

        <RadioGroup
          row
          aria-labelledby="transaction-type-group"
          name="type"
          value={transaction.type}
          onChange={handleChange}
          sx={{ my: 2 }}
        >
          <FormControlLabel value="income" control={<Radio />} label="Income" />
          <FormControlLabel
            value="expense"
            control={<Radio />}
            label="Expense"
          />
        </RadioGroup>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            name="date"
            value={transaction.date}
            onChange={handleDateChange}
            sx={{ my: 2, width: "100%" }}
          />
        </LocalizationProvider>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid>
            <Button variant="contained" onClick={handleTransaction}>
              Add
            </Button>
          </Grid>
          <Grid>
            <Button variant="outlined" onClick={() => handleClose(true)}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
    <Toast open={showToast} message={error}  handleClose={()=>setShowtoast(false)}/> 
    </>
  );
}
