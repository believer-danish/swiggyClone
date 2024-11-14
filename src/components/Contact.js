import React from "react";
import ChildComp from "./ChildComp";
import Child from "./Child";
import UserContext from "../utils/UserContext";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // console.log("parent constructor");
  }
  componentWillUnmount() {
    // console.log("parent comp will unmount");
    // console.log(document.querySelector(".mojo"));
  }
  componentDidMount() {
    // console.log("parent comp did mount");
    // console.log(document.querySelector(".mojo"));
  }

  componentDidUpdate() {
    // console.log("parent comp did update");
  }

  render() {
    return (
      <div className="mojo h-[200vh]">
        <h1>
          Name :{" "}
          {
            <UserContext.Consumer>
              {(data) => {
                return data.userName;
              }}
            </UserContext.Consumer>
          }
        </h1>
        <h2>Location :{this.props.location}</h2>
        <h3>Phone: 9835134322</h3>
        {/* <ChildComp name="first" /> */}
        {/* <Child>"hello"</Child> */}
      </div>
    );
  }
}

export default Contact;
