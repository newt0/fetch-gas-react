import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import Tabletop from "tabletop";

export const App = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1XrMZqr4aL_XbP5ULfzvMg1a6G2GUOjpmsi1Rr0JviAw", // Hide it later.
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err)); // Fix it later.
  }, []);

  useEffect(() => {
    Tabletop.init({
      key: "1WtWt1Df5l1m2yJN62C0omJYLAnHsAz6PLum94fw9pWc", // Hide it later.
      simpleSheet: true,
    })
      .then((data) => setData2(data))
      .catch((err) => console.warn(err)); // Fix it later.
  }, []);

  console.log("retrieved data>>>", data); // Delete it later.

  return (
    <div className="app">
      <h1>Fetch the data from google spread sheets.</h1>
      <ul>
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>Email -- {item.email}</li>
            <li>Token -- {item.token}</li>
            <br />
          </Fragment>
        ))}
      </ul>
      <ul>
        {data2.map((item, i) => (
          <Fragment key={i}>
            <li>Email -- {item.email}</li>
            <li>Token -- {item.token}</li>
            <br />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default App;
