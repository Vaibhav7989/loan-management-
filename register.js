import { Template } from 'meteor/templating';

import './register.html';

Template.register.events({
  'submit form'(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    Accounts.createUser({ email, password }, (error) => {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('/dashboard');
      }
    });
  },
});
