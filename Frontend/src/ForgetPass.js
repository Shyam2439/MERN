import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'

import Box from '@mui/material/Box'
function ForgetPass() {
  return (
    <div>
     <h3>Enter your Email</h3>
     <Grid>
     <Box
            sx={{
              my: 3,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
     <TextField
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
   <Button type="submit" variant="contained" color="secondary" onClick={()=>alert("Recovery link sent")}>
   
          submit
        </Button>
        
        </Box>
        </Grid>
    </div>
  )
}

export default ForgetPass;