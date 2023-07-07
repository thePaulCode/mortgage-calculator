import { useState } from "react";
import { Container, Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";


function App() {
  
// useState hook
// [name, function]
const [data, setData] = useState({
  homeValue: 3000,
  downPayment: 3000,
  loanAmount: 3000,
  loanTerm: 3000,
});
  


  return (
    <div className="App">
      <NavBar />      
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>

          <SliderSelect data={data} setData={setData}/>
          <TenureSelect />

          </Grid>
          <Grid item xs={12} md={6}>
          <Result />

          </Grid>

          
          
        </Grid>

      </Container>
    </div>
  );
}

export default App;
