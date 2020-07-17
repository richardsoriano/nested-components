import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);
  }
  isEven() {
    return true;
  }
  render() {
    const alterColors = this.props;

    return (
      //  {
      //   isEven(alterColors)){
      //     return (<tr><td bgcolor="black"></td></tr>);
      //   }
      //   {
      //     return (<tr><td bgcolor="white"></td></tr>)
      //   }
      <div>{this.props.alterColors}square</div>
    );
  }
}

export default Square;
