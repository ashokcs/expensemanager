import React, { Component } from "react";
import ExpenseDataService from "../service";
import Expense from "./Expense";
import './list.css'; 
import Logout from "../../Logout";
export default class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.onDataChange = this.onDataChange.bind(this);
    this.state = {
      expenses: [],
      currentExpense: null,
      currentIndex: -1,
    };
    this.unsubscribe = undefined;
  }
  componentDidMount() {
    this.unsubscribe = ExpenseDataService.getAll().orderBy("name", "asc").onSnapshot(this.onDataChange);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onDataChange(items) {
    let expenses = [];
    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      expenses.push({
        id: id,
        name: data.name,
        amount: data.amount,
        description: data.description,
        published: data.published,
      });
    });
    this.setState({
      expenses: expenses,
    });
  }
  refreshList() {
    this.setState({
      currentExpense: null,
      currentIndex: -1,
    });
  }
  
  render() {
    const { expenses, currentExpense, currentIndex } = this.state;
    return (
      <div className="list row">
        <div className="col-md-6">
          <div className="minirow">
            <div className="minicolumn">
                  <h4 className="header">Expenses List</h4>
              </div>
              <div id="logout" className="minicolumn">
                <Logout/>
              </div>
          </div>
          <ul className="list-group">
            {expenses &&
              expenses.map((expense, index) => (
                <li
                  className={ "note" } key={index}>
                  <p className="expese_name">{expense.name + "   -      " + expense.description}</p> <h4 className="amount">CAD$ {expense.amount}</h4> 

                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentExpense ? (
            <Expense
              expense={currentExpense}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p></p>
            </div>
          )}
        </div>
      </div>
    );
  }
}