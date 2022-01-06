import Spinner from "../assets/loading-buffering.gif";

const Spinned = () => {
  return (
    <img
      src={Spinner}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinned;
