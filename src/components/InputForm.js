import React, { Component } from "react";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberRowsColumns: "",
      boolDisplayTable: false,
    };
  }
  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });
  displayCheckers() {
    let final = [];
    const rowsColumns = this.state.numberRowsColumns.numberRowsColumns;

    //for (let j = 0; j < rowsColumns; j++) {
    // final.push(<tr>);  can't figure out an fragmented element
    for (let i = 0; i < rowsColumns; i++) {
      if (i % 2) {
        final.push(<td bgcolor="white" width="100" height="100"></td>);
      } else {
        final.push(<td bgcolor="black" width="100" height="100"></td>);
      }
    }
    //        final.push(</tr>);
    //}
    //console.log("final", final);
    return (
      <div>
        <table border="1px">{final}</table>
      </div>
    );
  }

  onSubmit(e) {
    const numberRowsColumns = this.state;
    e.preventDefault();
    this.setState({
      boolDisplayTable: true,
      numberRowsColumns,
    });
  }
  render() {
    const { numberRowsColumns, boolDisplayTable } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>
            Number:
            <input
              type="text"
              name="numberRowsColumns"
              defaultValue={numberRowsColumns}
              onChange={this.onChange}
            />
          </label>
          <label>
            Submit
            <input
              type="submit"
              value="Submit"
              className="btn btn-light btn-block"
            />
          </label>

          {/* {boolDisplayTable ? this.displayCheckers() : "no input"} */}

          {this.displayCheckers()}
        </form>
      </div>
    );
  }
}
export default InputForm;
