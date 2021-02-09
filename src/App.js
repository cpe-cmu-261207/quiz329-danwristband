import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  const [inputData, setInputData] = useState({
    Name: "",
    Gender: "",
    Age: +0
  });
  const [myData, setMyData] = useState([]);

  function adddata(inputData) {
    console.log(inputData);
    setMyData([...myData, inputData]);
  }
  //add useState for all state variables

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
            onChange={(e) =>
              setInputData({ ...inputData, Name: e.target.value })
            }
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            className="input"
            type="text"
            placeholder="Please select .."
            onChange={(e) =>
              setInputData({ ...inputData, Gender: e.target.value })
            }
          >
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 30"
            onChange={(e) =>
              setInputData({ ...inputData, Age: e.target.value })
            }
          ></input>
        </div>

        <button
          className="button is-primary is-fullwidth"
          onClick={() => adddata(inputData)}
        >
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        {myData.map((course, i) => (
          <ItemTable
            key={i}
            {...course}
            name={inputData.Name}
            gender={inputData.Gender}
            age={inputData.Age}
          />
        ))}

        <p>Akkaraphan Rattanakos 620610821</p>
      </div>
    </div>
  );
}

export default App;
