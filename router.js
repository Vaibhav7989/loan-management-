// lib/router.js
import { Router } from 'meteor/iron:router';

Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', {
  name: 'home',
  template: 'home',
});

Router.route('/register', {
  name: 'register',
  template: 'register',
});

Router.route('/login', {
  name: 'login',
  template: 'login',
});

Router.route('/dashboard', {
  name: 'dashboard',
  template: 'dashboard',
});

Router.route('/admin', {
  name: 'admin',
  template: 'adminDashboard',
});
