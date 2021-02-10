import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import Tabletop from "tabletop";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1XrMZqr4aL_XbP5ULfzvMg1a6G2GUOjpmsi1Rr0JviAw", // Hide it later.
      simpleSheet: true,
    })
      .then((data) => setData(data))
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
    </div>
  );
};

export default App;
