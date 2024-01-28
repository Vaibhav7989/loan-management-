// client/loanRequest.js
import { Template } from 'meteor/templating';

import './loanRequest.html';

Template.loanRequest.events({
  'submit form'(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    
    // Implement loan request functionality
  },
});
