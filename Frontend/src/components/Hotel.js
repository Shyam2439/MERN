import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import one from './f1.png';
import s from './v2.png';
import s1 from './aqua.png';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import { BorderAllOutlined } from '@mui/icons-material';
export default function Mobile() {
   const Mobile=[{
    "img":<img src={one} width={250} height={250} />,
     "Name":" Fruits",
     
   },
   
   {
    "img":<img src={s} width={250} height={250} />,
    "Name":"Vegitables",
     
   },
   
   {
    "img":<img src={s1} width={250} height={250} />,
    "Name":"SEA FOOD",
     
   }
]
  return (
    <div>
      <Navbar/>
    <div class="phone">
        <hr width="100%" size="3" /><center><h2> Make Your Choice </h2></center><hr width="100%" size="3" />
      <Box p={10}>
      <Grid  container justifyContent="center" spacing={2}>
              {Mobile.map((sp)=>(<Grid item>
               <Paper key={sp.id} sx={{height:400 , width:250} } style={{border: '2px solid yellow'}}>
               {sp.img}<br/>{sp.Name}<br/>
                   <h3> Name :{sp['Name']}<br/></h3>
                   <Button variant="contained"><Link to='/vegitables'>MORE INFO</Link> </Button>
                  
               </Paper>
               
              </Grid>))}
          </Grid>
     </Box>
     </div>
    </div>
)
}