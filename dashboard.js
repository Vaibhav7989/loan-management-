Template.dashboard.helpers({
  loanRequests() {
    return LoanRequests.find();
  },
  loanPayments() {
    return LoanPayments.find();
  },
  currentUserIsBorrower() {
    // Check if current user is a borrower
  },
  currentUserIsLender() {
    // Check if current user is a lender
  },
});

Template.dashboard.events({
  'submit #loanRequestForm'(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    Meteor.call('loanRequests.insert', amount);
    event.target.amount.value = '';
  },
  'submit #loanPaymentForm'(event) {
    event.preventDefault();
    const loanId = event.target.loanId.value;
    const amount = event.target.amount.value;
    Meteor.call('loanPayments.insert', loanId, amount);
    event.target.loanId.value = '';
    event.target.amount.value = '';
  },
});
