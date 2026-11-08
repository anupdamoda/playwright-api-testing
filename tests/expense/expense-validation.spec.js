const { test, expect } = require('../../fixtures/auth.fixture');

const { createExpense } = require('../../helpers/api.helper');

const {
  expenseWithoutAmount,
  expenseWithoutCategory
} = require('../../test-data/expense.data');

test('Should not create expense when amount is null', async ({
  authRequest
}) => {

  const response = await createExpense(
    authRequest,
    expenseWithoutAmount
  );

  expect(response.status()).toBe(400);

});

test('Should not create expense when category and amount are missing', async ({
  authRequest
}) => {

  const response = await createExpense(
    authRequest,
    expenseWithoutCategory
  );

  expect(response.status()).toBe(400);

});