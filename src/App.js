import React from "react";
import logo from "./logo.svg";
import "./App.css";
import C1 from "./components/c1";
import C2 from "./components/c2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c1address: "https://jsonplaceholder.typicode.com/users",
      c2address: "",
      c2data: {},
      c1data: {}
    };
  }
  render() {
    return (
      <div className="App">
        <div className="comp">
          <div className="c1">
            <C1
              onSend={this.sendAddress}
              onGet={this.onGet}
              address={this.state.c1address}
              data={this.state.c1data}
            />
          </div>
          <div className="c2">
            <C2
              onAddressChange={address => {
                this.setState({ c1address: address });
              }}
              getData={this.getData}
              data={this.state.c2data}
              address={this.state.c2address}
            />
          </div>
        </div>
      </div>
    );
  }
  onGet = data => {
    console.log(data);
    this.setState({ c2data: data });
  };
  sendAddress = address => {
    this.setState({ c2address: address });
  };
  getData = data => {
    this.setState({ c1data: data });
  };
}

export default App;
