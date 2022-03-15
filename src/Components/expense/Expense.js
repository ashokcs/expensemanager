import React, { Component } from "react";
import ExpenseDataService from "../service";
export default class Expense extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateExpense = this.updateExpense.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
    this.state = {
      currentExpense: {
        id: null,
        amount: 0,
        name: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { expense } = nextProps;
    if (prevState.currentExpense.id !== expense.id) {
      return {
        currentExpense: expense,
        message: ""
      };
    }
    return prevState.currentExpense;
  }
  componentDidMount() {
    this.setState({
      currentExpense: this.props.expense,
    });
  }
  onChangeName(e) {
    const name = e.target.value;
    this.setState(function (prevState) {
      return {
        currentExpense: {
          ...prevState.currentExpense,
          name: name,
        },
      };
    });
  }
  onChangeAmount(e) {
    const amount = e.target.value;
    this.setState(function (prevState) {
      return {
        currentExpense: {
          ...prevState.currentExpense,
          amount: amount,
        },
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;
    this.setState((prevState) => ({
        currentExpense: {
        ...prevState.currentExpense,
        description: description,
      },
    }));
  }
  updatePublished(status) {
    ExpenseDataService.update(this.state.currentExpense.id, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentExpense: {
            ...prevState.currentExpense,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }
  updateExpense() {
    const data = {
      title: this.state.currentExpense.title,
      amount: this.state.currentExpense.amount,
      description: this.state.currentExpense.description,
    };
    ExpenseDataService.update(this.state.currentExpense.id, data)
      .then(() => {
        this.setState({
          message: "The Expense was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  deleteExpense() {
    ExpenseDataService.delete(this.state.currentExpense.id)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    const { currentExpense } = this.state;
    return (
      <div>
        <h4>Expense</h4>
        {currentExpense ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentExpense.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentExpense.amount}
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentExpense.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentExpense.published ? "Published" : "Pending"}
              </div>
            </form>
            {currentExpense.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteExpense}
            >
              Delete
            </button>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateExpense}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Expense...</p>
          </div>
        )}
      </div>
    );
  }
}