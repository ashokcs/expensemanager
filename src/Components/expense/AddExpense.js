import React, { Component } from "react";
import ExpenseService from "../service";
export default class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
    this.newExpense = this.newExpense.bind(this);
    this.state = {
      name: "",
      amount: "",
      description: "",
      published: false,
      submitted: false,
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeAmount(e) {
    this.setState({
      amount: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  saveExpense() {
    let data = {
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description,
      published: false
    };
    ExpenseService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newExpense() {
    this.setState({
      name: "",
      amount: "",
      description: "",
      published: false,
      submitted: false,
    });
  }
  
  render() { 
      return (
    <div className="submit-form">
      {this.state.submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              name="description"
            />
          </div>
          <button onClick={this.saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
        </div>);
    }
}