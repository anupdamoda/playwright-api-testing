const validExpense = {

  expenseName: 'Bus',
  expenseCategory: 'Travel',
  expenseAmount: 20

};

const expenseWithoutAmount = {

  expenseName: 'Bus',
  expenseCategory: 'Travel',
  expenseAmount: null

};

const expenseWithoutCategory = {

  expenseName: 'Bus',
  expenseAmount: null

};

module.exports = {

  validExpense,
  expenseWithoutAmount,
  expenseWithoutCategory

};