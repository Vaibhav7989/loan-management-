// server/publications.js

Meteor.publish('loanRequests', function () {
    return LoanRequests.find();
  });
  
  Meteor.publish('loanPayments', function () {
    return LoanPayments.find();
  });
  
  Meteor.publish('allTransactions', function () {
    return Transactions.find();
  });
  