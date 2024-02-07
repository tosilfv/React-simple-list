import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CowForm } from "./components/CowForm";
import { CowTable } from "./components/CowTable";
import { initCows } from "./init/initCows";
import { cowSum } from "./utils/cowSum";
import { createData } from "./utils/createData";
import { createTotal } from "./utils/createTotal";
import "./App.css";

const style = {
  buttonAdd: {
    backgroundColor: "blue",
    marginTop: "20px",
  },
  buttonRemove: {
    border: "2px solid grey",
    backgroundColor: "red",
  },
  footer: {
    captionSide: "bottom",
    padding: "10px",
  },
  form: {
    backgroundColor: "grey",
    border: "2px solid grey",
    color: "black",
    display: "inline-block",
    marginBottom: "30px",
    padding: "20px 10px",
    textTransform: "capitalize",
  },
  formError: {
    color: "white",
  },
  table: {
    border: "2px solid grey",
    borderCollapse: "collapse",
    fontSize: "1rem",
    letterSpacing: "1px",
    padding: "8px 10px",
    textAlign: "center",
  },
  tableRow: {
    border: "2px solid grey",
  },
};

function App() {
  const [formError, setFormError] = useState(false);
  const [cows, setCows] = useState(initCows);

  const name = useRef();
  const color = useRef();
  const age = useRef();
  const value = useRef();

  const totals = [createTotal("Totals", cows.length, cowSum(cows))];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      !name.current.value ||
      !color.current.value ||
      !age.current.value ||
      !value.current.value
    ) {
      setFormError(true);
      return;
    } else {
      const fd = new FormData(evt.target);
      const data = Object.fromEntries(fd.entries());
      const newCow = { ...data, id: uuidv4() };
      setCows([...cows, newCow]);
      setFormError(false);
      evt.target.reset();
    }
  };

  const handleRemove = (id) => {
    const newCows = cows.filter((cow) => {
      if (cow.id !== id) {
        return createData(cow);
      }
    });
    setCows(newCows);
  };

  return (
    <div>
      <h1>Cattle</h1>
      <h3>Add A New Cow</h3>
      <CowForm
        style={style}
        name={name}
        color={color}
        age={age}
        value={value}
        formError={formError}
        handleSubmit={handleSubmit}
      />
      <CowTable
        style={style}
        cows={cows}
        totals={totals}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;
