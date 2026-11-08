<div align="center">

# Playwright API Testing

**A lightweight API test suite for authentication and expense endpoints, built with Playwright Test.**

[![Playwright](https://img.shields.io/badge/Playwright-API%20Testing-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A520-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

</div>

## Overview

This project exercises REST API behavior with [Playwright's API testing tools](https://playwright.dev/docs/api-testing). It covers login and JWT authentication, as well as expense retrieval, creation, and input validation. Shared fixtures and helpers keep authentication and requests reusable across tests.

## What’s covered

- Login endpoint response and JWT token presence
- Authenticated expense API requests using a bearer token
- Expense retrieval and creation
- Expense payload validation scenarios
- HTML reporting and traces retained on failure

## Tech stack

- **Node.js** (20 or newer)
- **JavaScript** (CommonJS)
- **Playwright Test**
- **dotenv** for local environment configuration

## Getting started

### Prerequisites

- Node.js 20+ and npm
- Access to an API providing the expected authentication and expense endpoints
- Test account credentials accepted by that API

### Installation

```bash
git clone https://github.com/anupdamoda/playwright-api-testing.git
cd playwright-api-testing
npm ci
```

Create a `.env` file in the repository root and provide values for the test API and account:

```dotenv
BASE_URL=https://your-api-host/
API_EMAIL=your-test-account@example.com
API_PASSWORD=your-test-password
```

`BASE_URL` should be the API origin (for example, `http://localhost:3000`). The tests call `api/auth/login` and `api/expense` relative to that URL. Use a dedicated test account and keep credentials private. **Do not commit `.env` or real secrets.**

## Running tests

The Playwright configuration is located at `config/playwright.config.js`. Pass it explicitly when running tests so the `.env` loading, base URL, reporter, and trace settings are applied.

```bash
# Run the complete suite
npx playwright test --config=config/playwright.config.js

# Run a suite or an individual test file
npx playwright test tests/auth --config=config/playwright.config.js
npx playwright test tests/expense --config=config/playwright.config.js
npx playwright test tests/expense/expense-validation.spec.js --config=config/playwright.config.js
```

The repository also defines these npm scripts:

```bash
npm run test:api
npm run test:auth
npm run test:expense
npm run test:validation
```

## Reports and debugging

The configured test run produces a list report and an HTML report. Open the most recent HTML report with:

```bash
npm run report
```

The Playwright configuration retains traces on failure. For more information about inspecting traces, see the [Playwright Trace Viewer guide](https://playwright.dev/docs/trace-viewer).

## Repository layout

```text
├── config/
│   └── playwright.config.js   # Playwright settings and dotenv loading
├── fixtures/
│   └── auth.fixture.js        # Authenticated API request fixture
├── helpers/
│   ├── api.helper.js          # Expense API request helpers
│   └── auth.helper.js         # Login and token handling
├── test-data/
│   └── expense.data.js        # Valid and invalid expense payloads
└── tests/
    ├── auth/
    │   └── login.spec.js
    └── expense/
        ├── create-expense.spec.js
        ├── expense-validation.spec.js
        └── get-expense.spec.js
```

## Contributing

Contributions and improvements are welcome. Please keep credentials out of commits, use the configured test account/environment, and run the relevant tests before opening a pull request.

## License

Distributed under the [ISC License](https://opensource.org/licenses/ISC).
