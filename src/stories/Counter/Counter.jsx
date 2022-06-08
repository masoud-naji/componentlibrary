import React, { useState } from "react";
import { Button } from "../Button";
import PropTypes from "prop-types";

export default function Counter({ color, backgroundColor, size }) {
  const [count, setCount] = useState(0);
  const HandleOnClick = (evtType) => {
    if (evtType === "Add") {
      setCount(count + 1);
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <span style={{ color }}>Counter:{count}</span>
      <br />
      <Button
        label="+"
        onClick={() => HandleOnClick("Add")}
        backgroundColor={backgroundColor}
        size={size}
      ></Button>
      <Button
        label="-"
        onClick={() => HandleOnClick("Sub")}
        backgroundColor={backgroundColor}
        size={size}
      ></Button>
    </>
  );
}

Counter.propTypes = {
  color: PropTypes.string,

  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
