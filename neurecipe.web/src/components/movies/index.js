import React, { Component } from "react";
import Iframe from "react-iframe";

class Movies extends Component {
  render() {
    return (
      <Iframe
        url="http://localhost:3001/"
        width="100%"
        height="460vh"
        display="initial"
        position="relative"
      />
    );
  }
}
export default Movies;
