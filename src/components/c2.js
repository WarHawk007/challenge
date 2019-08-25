import React from "react";
export default props => {
  const sendback = () => {};
  return (
    <div>
      <h1>C2</h1>
      <div style={{ width: "100%" }}>
        <input
          className="c2text"
          type="text"
          defaultValue={props.address}
          onChange={e => {
            props.onAddressChange(e.target.value);
          }}
          placeholder={"www.placeholder.com"}
        />
      </div>
      <div className="c2btns">
        <button
          className="c2btn send"
          onClick={() => {
            props.getData(props.data);
          }}
        >
          Send To C1
        </button>
      </div>
      {props.data.length > 0 && (
        <div className="data">{JSON.stringify(props.data)}</div>
      )}
    </div>
  );
};
