import React, { Component } from "react";
import Iframe from "react-iframe";

class Movies extends Component {
  render() {
    return (
      <Iframe
        url="http://localhost:3000/"
        width="100%"
        height="470vh"
        display="initial"
        position="relative"
      />
    );
  }
}
export default Movies;
