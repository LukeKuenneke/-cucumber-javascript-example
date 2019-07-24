const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const request = require('sync-request');

Given("a variable set to {int}", function(number) {
  this.setTo(number);
});

When("I increment the variable by {int}", function(number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function(number) {
  expect(this.variable).to.eql(number);
});

Given('I go to https:\/\/www.google.com', function () {
    response = request('GET', "https://www.google.com");
    this.statusCode = response.statusCode;
});

Then('I should get a HTTP {int} response code', function (response_code) {
  expect(this.statusCode).to.eql(response_code);
});