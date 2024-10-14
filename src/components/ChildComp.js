import { Component } from "react";

export default class ChildComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        data: "dummy",
      },
    };
    console.log(props.name + "child constructor");
  }

  render() {
    console.log(this.props.name + "child render");

    return (
      <div>
        <h1>{this.props.name}child</h1>
        <h2>{this.state.userInfo.data}</h2>
      </div>
    );
  }

  //   async componentDidMount() {
  //     console.log(this.props.name + "child comp did mount");

  //     const resObj = await fetch("https://dummyjson.com/products/categories");
  //     const data = await resObj.json();
  //     this.setState({ userInfo: { data: data[0].name } });
  //   }

  componentDidMount() {
    console.log(this.props.name + "child comp did mount");

    fetch("https://dummyjson.com/products/categories")
      .then((data) => data.json())
      .then((data) => {
        this.setState({ userInfo: { data: data[0].name } });
      });
  }
  componentDidUpdate(prevPros, prevState) {
    //   console.log(prevPros,prevState);
    console.log(this.props.name + "child comp did update", this.state.userInfo.data);
  }
}
