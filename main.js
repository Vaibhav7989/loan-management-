import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './main.html';

Template.navbar.events({
  'click #logout'(event) {
    event.preventDefault();
    Meteor.logout();
  },
});
