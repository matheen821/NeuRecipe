import React, { Component } from "react";
import Iframe from "react-iframe";
import { Subscriber, publish } from "../pubHub";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";

class Movies extends Component {
  sayHello = () => {
    publish("Hello from Recipe app");
  };
  notify = data => {
    toast.success(data);
  };
  render() {
    return (
      <div>
        <Subscriber>{text => <h1>{this.notify(text)}</h1>}</Subscriber>
        <div className="load-more">
          <Button
            color="primary"
            variant="contained"
            onClick={() => this.sayHello()}
          >
            Say Hello
          </Button>
        </div>
        <Iframe
          url="http://localhost:3001/"
          width="100%"
          height="400vh"
          display="initial"
          position="relative"
        />
      </div>
    );
  }
}
export default Movies;
