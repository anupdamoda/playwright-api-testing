const { expect } = require('@playwright/test');

async function login(apiContext) {

  const response = await apiContext.post('api/auth/login', {

    data: {
      email: process.env.API_EMAIL,
      password: process.env.API_PASSWORD
    }

  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.token).toBeTruthy();

  return responseBody.token;

}

module.exports = {
  login
};