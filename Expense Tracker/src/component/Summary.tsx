import { useContext } from 'react'
import { Grid,Typography,Box } from '@mui/material'
import { GlobalContext } from '../context/GlobalContext'
import { Chart } from './Chart'
import FilterOptions from './FilterOptions'

function Summary() {

    const {totalExpense,totalIncome}=useContext(GlobalContext)
  return (
     <Grid container height={"60vh"} >
          {/* Left Part */}

          <Grid size={6} display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"} height={"100%"} bgcolor={"grey.200"}>
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
          <Grid  size={6} padding={"5px"} height={"50vh"} >
            
              <FilterOptions/>
              <Chart totalExpense={totalExpense} totalIncome={totalIncome}/>
            
          </Grid>
        </Grid>
  )
}

export default Summary