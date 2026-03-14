# Cypress SauceDemo Automation

![Cypress Tests](https://github.com/Tharsi-Rangan/cypress-saucedemo-automation/actions/workflows/cypress.yml/badge.svg)

Automated end-to-end testing project for the SauceDemo web application using Cypress.  
This project demonstrates test automation practices including assertions, fixtures, mocking/stubbing, reporting, and CI/CD integration with GitHub Actions.

## Project Overview

This project automates key user flows of the SauceDemo application:

- User login
- Adding products to cart
- Checkout process
- Mocking and stubbing of network requests

The goal of this project is to demonstrate modern QA automation practices with Cypress and continuous integration using GitHub Actions.

## Tech Stack

- Cypress (E2E testing framework)
- JavaScript
- Node.js
- Git & GitHub
- GitHub Actions (CI/CD)
- Mocha HTML Reporter

## Project Structure

cypress-saucedemo-automation
│
├── cypress
│   ├── e2e
│   │   ├── login.cy.js
│   │   ├── cart.cy.js
│   │   ├── checkout.cy.js
│   │   └── mock.cy.js
│   │
│   ├── fixtures
│   │   └── checkoutData.json
│   │
│   └── support
│       ├── commands.js
│       └── e2e.js
│
├── .github/workflows
│   └── cypress.yml
│
├── cypress.config.js
├── package.json
└── README.md

## Test Scenarios

### Login Tests
- Successful login with valid credentials
- Error message for invalid login

### Cart Tests
- Add product to cart
- Verify product appears in cart

### Checkout Tests
- Complete checkout using fixture data

### Mocking & Stubbing
- Intercept and stub inventory request

## Running Tests Locally

1. Clone the repository

git clone https://github.com/your-username/cypress-saucedemo-automation.git

2. Install dependencies

npm install

3. Run Cypress Test Runner

npx cypress open

4. Run tests in headless mode

npx cypress run

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration.

Whenever code is pushed to the repository:

1. GitHub Actions automatically triggers
2. Node.js environment is prepared
3. Dependencies are installed
4. Cypress tests run automatically

This ensures test failures are detected early.

## Test Results

Total Tests: 6  
Passed: 6  
Failed: 0  
Pending: 0  

All tests successfully execute in both local and CI environments.

## Author

Tharsiga Ranganathan  
Software Engineering Undergraduate, SLIIT  