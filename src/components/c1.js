import React from "react";

export default props => {
  const addressRef = React.createRef();
  // const address = "https://jsonplaceholder.typicode.com/users";
  return (
    <div>
      <h1>C1</h1>
      <div style={{ width: "100%" }}>
        <input
          ref={addressRef}
          className="c1text"
          type="text"
          placeholder="www.placeholder.com"
          value={props.address}
          readOnly
        />
      </div>
      <div className="c1btns">
        <button className="c1btn send" onClick={clickSend}>
          Send
        </button>
        <button className="c1btn get" onClick={clickGet}>
          GET Request
        </button>
      </div>
      {props.data.length > 0 && (
        <div className="data">{JSON.stringify(props.data)}</div>
      )}
    </div>
  );
  function clickSend(event) {
    props.onSend(addressRef.current.value);
  }
  function clickGet() {
    fetch(addressRef.current.value, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        props.onGet(data);
      });
  }
};
