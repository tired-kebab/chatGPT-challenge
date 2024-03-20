import { Button, Paper, Typography, TextField } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [result, setResult] = useState();

  const handleInput1 = (e) => {
    setInput1(Number(e.target.value));
  };
  const handleInput2 = (e) => {
    setInput2(Number(e.target.value));
  };

  const handleAddition = () => {
    setResult(input1 + input2);
  };

  const handleSubtraction = () => {
    setResult(input1 - input2);
  };

  const handleDivision = () => {
    setResult(input1 / input2);
  };

  const handleMultiplication = () => {
    setResult(input1 * input2);
  };

  useEffect(() => {
    setInput1(result);
    setInput2("");
  }, [result]);

  return (
    <div className="container">
      <Paper
        className="calculator"
        elevation={5}
        sx={{
          width: 500,
          padding: 2,
        }}
      >
        <Typography variant="h3" color="initial">
          Calculator
        </Typography>
        <TextField
          className="input"
          value={input1}
          onChange={handleInput1}
          type="number"
          sx={{ bgcolor: "white" }}
        />
        <TextField
          className="input"
          value={input2}
          onChange={handleInput2}
          type="number"
          sx={{ bgcolor: "white" }}
        />

        <Button variant="outlined" onClick={handleAddition}>
          +
        </Button>
        <Button variant="outlined" onClick={handleSubtraction}>
          -
        </Button>
        <Button variant="outlined" onClick={handleDivision}>
          /
        </Button>
        <Button variant="outlined" onClick={handleMultiplication}>
          *
        </Button>
      </Paper>
    </div>
  );
}

export default App;
