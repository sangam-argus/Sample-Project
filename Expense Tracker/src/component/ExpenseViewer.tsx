import  { useContext } from 'react'
import { Grid,Typography } from '@mui/material'
import { GlobalContext } from '../context/GlobalContext'
import type { Transaction } from '../utils/Types'
function ExpenseViewer() {
    const {allTransaction}=useContext(GlobalContext)
  return (
    <Grid container spacing={2}>
          <Grid  size={6}>
            <Typography variant="h6">Expense</Typography>
            {allTransaction.filter((item:Transaction)=>item.type==="expense")
            .map((item:Transaction,index:number)=>(
              <Grid key={index} sx={{border:'1px grey',backgroundColor:'#c99997',display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'5px'}}>
                <Typography sx={{float:"left"}}>{item.description}</Typography>
                <Typography sx={{float:"right"}}>{item.amount}</Typography>

              </Grid>
            ))
            }
          </Grid>
          <Grid  size={6} textAlign="left">
            <Typography variant="h6">Income</Typography>
           {allTransaction.filter((item:Transaction)=>item.type==="income")
            .map((item:Transaction,index:number)=>(
              <Grid key={index} sx={{border:'1px grey',backgroundColor:'#c99997',display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'5px'}}>
                <Typography sx={{float:"left"}}>{item.description}</Typography>
                <Typography sx={{float:"right"}}>{item.amount}</Typography>

              </Grid>
            ))
            }
          </Grid>
        </Grid>
  )
}

export default ExpenseViewer