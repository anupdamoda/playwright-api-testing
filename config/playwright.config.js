const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

const { defineConfig } = require('@playwright/test');

console.log('BASE URL:', process.env.BASE_URL);

module.exports = defineConfig({

  testDir: '../tests',

  workers: 1,

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {

    baseURL: process.env.BASE_URL,

    trace: 'retain-on-failure'

  }

});