import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import one from './apple.png';
import s from './grapes.png';
import s1 from './orange.png';
import rake from './banana.png';
import rake1 from './dragon.png';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import { BorderAllOutlined } from '@mui/icons-material';
export default function Mobile() {
   const Mobile=[{
    "img":<img src={one} width={300} height={250} />,
    "Fruit Name":"Apple"
     
   },
   {
    "img":<img src={rake} width={300} height={250} />,
    "Fruit Name":"Banana"
    
   },
   {
    "img":<img src={s} width={300} height={250} />,
    "Fruit Name":"Grapes"
    
   },
   {
    "img":<img src={s1} width={300} height={250} />,
    "Fruit Name":"Orange"
    
   },
   {
    "img":<img src={rake1} width={300} height={250} />,
    "Fruit Name":"Dragon fruit"
    
   }
]
  return (
    <div>
      <Navbar/>
    <div class="phone">
        <hr width="100%" size="3" /><center><h2> Fruits</h2></center><hr width="100%" size="3" />
      <Box p={10}>
      <Grid  container justifyContent="center" spacing={2}>
              {Mobile.map((sp)=>(<Grid item>
               <Paper key={sp.id} sx={{height:400 , width:350} } style={{border: '2px solid yellow'}}>
               {sp.img}<br/>{sp.Name}<br/>
                   <h3>  Name:{sp['Fruit Name']}<br/>  </h3>
                   <Button variant="contained"><Link to='/CartApp'>BOOK NOW</Link> </Button>
               </Paper>
               
              </Grid>))}
          </Grid>
     </Box>
     </div>
    </div>
)
}