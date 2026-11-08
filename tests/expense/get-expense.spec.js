const { test, expect } = require('../../fixtures/auth.fixture');

const { getExpenses } = require('../../helpers/api.helper');

test('GET expenses API should return successfully', async ({
  authRequest
}) => {

  const response = await getExpenses(authRequest);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toBeTruthy();

});