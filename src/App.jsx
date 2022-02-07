import React, {useState} from 'react';


const App = () => {
  const [result, setResult] = useState("");

  const handle_click = (event) => {
    setResult(result.concat(event.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  }
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    }
    catch(err) {
      setResult("Error");
    }
  }


  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button className="highlight" id="clear" onClick={clear}>Clear</button>
        <button className="highlight" id="backspace" onClick={backspace}>C</button>
        <button className="highlight" name="/" onClick={handle_click}>&divide;</button>
        <button name="7" onClick={handle_click}>7</button>
        <button name="8" onClick={handle_click}>8</button>
        <button name="9" onClick={handle_click}>9</button>
        <button className="highlight" name="*" onClick={handle_click}>&times;</button>
        <button name="4" onClick={handle_click}>4</button>
        <button name="5" onClick={handle_click}>5</button>
        <button name="6" onClick={handle_click}>6</button>
        <button className="highlight" name="-" onClick={handle_click}>&ndash;</button>
        <button name="1" onClick={handle_click}>1</button>
        <button name="2" onClick={handle_click}>2</button>
        <button name="3" onClick={handle_click}>3</button>
        <button className="highlight" name="+" onClick={handle_click}>+</button>
        <button name="0" onClick={handle_click}>0</button>
        <button name="." onClick={handle_click}>.</button>
        <button className="highlight" id="result" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
