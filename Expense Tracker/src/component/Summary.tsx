import { useContext } from 'react'
import { Grid,Typography,Box } from '@mui/material'
import { GlobalContext } from '../context/GlobalContext'
import { Chart } from './Chart'

function Summary() {

    const {totalExpense,totalIncome}=useContext(GlobalContext)
  return (
     <Grid container sx={{ marginTop:"20px", display: "flex", alignItems: "center" ,justifyContent:'center'}} bgcolor={"grey.200"}>
          {/* Left Part */}

          <Grid size={6} display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"} >
            <Typography variant="h6" gutterBottom color={totalIncome-totalExpense>=0?'black':'red'}>
              Balance is {totalIncome-totalExpense} $
            </Typography>
            <Grid display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
            <Box >
              <Typography variant="body1">$ {totalIncome}</Typography>
              <Typography variant="body2" color="text.secondary">
                Total Income
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body1">$ {totalExpense}</Typography>
              <Typography variant="body2" color="text.secondary">
                Total Expense
              </Typography>
            </Box>
            </Grid>
          </Grid>
          {/* Right Part (Graph Placeholder) */}
          <Grid  size={6} display="flex" justifyContent="center" alignItems="center">
            <Box
              sx={{
                width: "30%",
                height: 300,
                bgcolor: "grey.200",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Chart totalExpense={totalExpense} totalIncome={totalIncome}/>
            </Box>
          </Grid>
        </Grid>
  )
}

export default Summary