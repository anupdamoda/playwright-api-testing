async function getExpenses(apiContext) {
  return await apiContext.get('api/expense');
}

async function createExpense(apiContext, expenseData) {
  return await apiContext.post('api/expense', {
    data: expenseData
  });
}

module.exports = {
  getExpenses,
  createExpense
};