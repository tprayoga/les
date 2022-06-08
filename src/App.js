import { useState } from "react";

function App() {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput([...output, input]);
    // setOutput([input]);
    setInput("");
  };
  return (
    <div>
      <h1>Test</h1>
      <form id="form" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Test
          </label>
          <input
            type="text"
            name="input"
            value={input}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            Primary
          </button>
        </div>
        <div>
          {output.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
