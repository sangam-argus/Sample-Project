import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { intialTransaction, type Transaction } from "../utils/Types";
import { GlobalContext } from "../context/GlobalContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: (data: boolean) => void;
}) {
    
  const [transaction, setTransaction] = useState<Transaction>(intialTransaction);
  const {handleAddTransaction}=useContext(GlobalContext)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTransaction((prevData) => ({
      ...prevData,
       [name]: name === "amount" ? Number(value) : value,
    }));
  };
  const handleTransaction=()=>{
    console.log("in modal:",transaction)
    handleAddTransaction(transaction)
    setTransaction(intialTransaction)
    handleClose(true)
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button
          variant={"contained"}
          onClick={handleClose}
          sx={{ float: "right" ,marginBottom:'20px'}}
        >
          X
        </Button>
        <TextField
          required
          sx={{marginTop:'5px'}}
          name="description"
          id="outlined-required"
          label="Enter Description"
          placeholder="Enter Description...."
          value={transaction.description}
          onChange={handleChange}
        />
        <TextField
          required
          name="amount"
          sx={{marginTop:'5px'}}
          id="outlined-required"
          label="Enter Amount"
          placeholder="Enter Amount...."
          value={transaction.amount}
          onChange={handleChange}
        />
        <RadioGroup
        row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="type"
          value={transaction.type}
          onChange={handleChange}
          
        >
          <FormControlLabel value="income" control={<Radio />} label="Income" />
          <FormControlLabel
            value="expense"
            control={<Radio />}
            label="Expense"
          />
        </RadioGroup>

        <Button variant="contained" onClick={handleTransaction}>Add</Button>
        <Button
          variant="contained"
          sx={{ float: "right" }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}
