import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import one from './potato.png';
import s from './brinjal.png';
import s1 from './vegi1.png';
import rake from './tomato.png';
import rake1 from './bitter.png';
import rake2 from './vegi2.png';
import { Link } from "react-router-dom";
import { BorderAllOutlined } from '@mui/icons-material';
import Navbar from './Navbar';
export default function Mobile() {
   const Mobile=[{
    "img":<img src={one} width={300} height={250} />,
     "vegi Name":"POTATO",
   },
   {
    "img":<img src={rake} width={300} height={250} />,
    "vegi Name":"TOMATO",
    
   },
   {
    "img":<img src={s} width={300} height={250} />,
    "vegi Name":"BRINJAL ",
     
   },
   {
    "img":<img src={rake1} width={300} height={250} />,
    "vegi Name":"Bittergaurd ",
     
   },
   {
    "img":<img src={s1} width={300} height={250} />,
    "vegi Name":"Caulflower ",
     
   },
   {
    "img":<img src={rake2} width={300} height={450} />,
    "vegi Name":"Broccile ",
     
   }
]
  return (
    <div>
      <Navbar/>
    <div class="phone">
        <hr width="100%" size="3" /><center><h2> Vegitables</h2></center><hr width="100%" size="3" />
      <Box p={10}>
      <Grid  container justifyContent="center" spacing={2}>
              {Mobile.map((sp)=>(<Grid item>
               <Paper key={sp.id} sx={{height:500 , width:350} } style={{border: '2px solid yellow'}}>
               {sp.img}<br/>{sp.Name}<br/>
                   <h3>Name:{sp['vegi Name']}</h3>
                   <Button variant="contained"><Link to='/CartApp'>BOOK NOW</Link> </Button>
               </Paper>
               
              </Grid>))}
          </Grid>
     </Box>
     </div>
    </div>
)
}