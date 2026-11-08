const { test, expect } = require('@playwright/test');

test('Login API should return JWT token', async ({ request }) => {

  const response = await request.post('api/auth/login', {

    data: {
      email: process.env.API_EMAIL,
      password: process.env.API_PASSWORD
    }

  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.token).toBeTruthy();

});