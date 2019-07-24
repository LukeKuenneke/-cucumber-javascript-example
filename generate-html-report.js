var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'test-results.json',
        output: 'test-results.html',
        reportSuiteAsScenarios: true
    };
 
    reporter.generate(options);