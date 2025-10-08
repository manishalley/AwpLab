import { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        b === 0 ? setResult("Cannot divide by 0") : setResult(a / b);
        break;
      default:
        setResult("Unknown operation");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <br /><br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <br /><br />
      <button onClick={() => handleOperation("+")}>+</button>
      <button onClick={() => handleOperation("-")}>-</button>
      <button onClick={() => handleOperation("*")}>*</button>
      <button onClick={() => handleOperation("/")}>/</button>
      <br /><br />
      <h2>Result: {result !== null ? result : ""}</h2>
    </div>
  );
}
