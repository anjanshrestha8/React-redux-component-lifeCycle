import { Component } from "react";


import Map from "./services/map";

class App extends Component {
  render() {
    return (
      <>
        <div className="app-wrapper">
          <Map />
        </div>
      </>
    );
  }
}
export default App;
