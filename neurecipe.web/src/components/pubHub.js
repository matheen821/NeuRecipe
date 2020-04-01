import { Component } from "react";
import { Subject } from "rxjs";
// The Main Subject/Stream to be listened on.
const mainSubject = new Subject();
// This function is used to publish data to the Subject via next().
export const publish = data => {
  mainSubject.next(data);
};
export class Subscriber extends Component {
  // Used for unsubscribing when our component unmounts
  unsub = null;
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.unsub = mainSubject.subscribe(data => {
      this.setState({ data });
    });
  }
  componentWillUnmount() {
    this.unsub.unsubscribe();
  }
  render() {
    return this.props.children(this.state.data);
  }
}
