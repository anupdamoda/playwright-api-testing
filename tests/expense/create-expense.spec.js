const { test, expect } = require('../../fixtures/auth.fixture');

const { createExpense } = require('../../helpers/api.helper');

const { validExpense } = require('../../test-data/expense.data');

test('POST expense API should create a new expense', async ({
  authRequest
}) => {

  const response = await createExpense(
    authRequest,
    validExpense
  );

  expect(response.ok()).toBeTruthy();

});