import { useState } from 'react'
import Header from './components/Header'
import { Button, TextField, Container, CssBaseline } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';

function App() {
  return (
    <>
      <CssBaseline />
      <Header/>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Item sx={{ my: 2 }}>
              <TextField fullWidth={true} id="outlined-basic" label="English" variant="outlined" />
            </Item>
            <Item sx={{ my: 2 }}>
              <TextField fullWidth={true} id="outlined-basic" label="Ukrainian" variant="outlined" />
            </Item>
            <Item sx={{ my: 2 }}>
              <Button variant="contained" size="large" fullWidth={true}>Add</Button>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
