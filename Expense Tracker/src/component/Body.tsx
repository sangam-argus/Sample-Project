
import {  Box } from "@mui/material";

import Header from "./Header";
import ExpenseViewer from "./ExpenseViewer";
import Summary from "./Summary";
export default function Body() {

  return (
    <>
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", padding:'20px'}}>
      {/* Header */}
        <Header/>
      {/* Middle Section */}
      
       <Summary/>
      <Box sx={{ p: 2 }}>
      {/* Bottom Section */}

        <ExpenseViewer/>
      </Box>
    </Box>
    </>
  );
}