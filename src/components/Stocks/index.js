import { Redirect, useHistory } from "react-router-dom";

const loggedIn = true;

function Stocks() {
  const history = useHistory();

  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };

  if (!loggedIn) return <Redirect to="/not-logged-in" />;

  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
