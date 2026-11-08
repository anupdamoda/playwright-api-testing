
const {
  test: base,
  expect,
  request: apiRequest
} = require('@playwright/test');

const { login } = require('../helpers/auth.helper');

const test = base.extend({

  authRequest: async ({}, use) => {

    // Create API context
    const apiContext = await apiRequest.newContext({
      baseURL: process.env.BASE_URL
    });

    try {

      // Login and retrieve JWT
      const token = await login(apiContext);

      // Create authenticated API context
      const authenticatedContext = await apiRequest.newContext({
        baseURL: process.env.BASE_URL,
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      try {
        // Provide authenticated context to tests
        await use(authenticatedContext);
      } finally {
        await authenticatedContext.dispose();
      }

    } finally {

      // Cleanup login context
      await apiContext.dispose();

    }

  }

});

module.exports = { test, expect };
