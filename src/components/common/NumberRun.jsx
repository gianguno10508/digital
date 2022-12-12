import { FastCounter } from "react-smooth-counter";

const NumberRun = ({number}) => {
  return (
    <FastCounter
      delay={1000}
      startNumber={0}
      to={number}
      style={{
        color: "grey",
        fontSize: 50,
        fontWeight: "bold",
        width: "100%",
      }}
      className={"randomClass"}
    />
  );
};
export default NumberRun;
