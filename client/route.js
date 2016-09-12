import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../imports/ui/layouts/mainLayout.jsx';
import App from '../imports/ui/App.jsx';
import Home from '../imports/ui/Home.jsx';
import NewPoll from '../imports/ui/NewPoll.jsx';
import Header from '../imports/ui/partials/header.jsx';
import NewUser from '../imports/ui/partials/register.jsx';
import Login from '../imports/ui/partials/login.jsx';
import ChangePassword from '../imports/ui/partials/changePassword.jsx';
import ResetPassword from '../imports/ui/partials/resetPassword.jsx';
import Profile from '../imports/ui/partials/profile.jsx';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, {
      header: (<Header />),
      content: (<Home />)
    })
  }
});

FlowRouter.route('/polls', {
  name: 'polls',
  action() {
    mount(MainLayout, {
      header: (<Header />),
      content: (<App />)
    })
  }
});

FlowRouter.route('/newPoll', {
  name: 'newPoll',
  action() {
    mount(MainLayout, {
      header: (<Header />),
      content: (<NewPoll />)
    })
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    mount(MainLayout, {
      header: (<Header />),
      content: (<Login />)
    })
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action() {
    mount(MainLayout, {
      header: (<Header />),
      content: (<NewUser />)
    })
  }
});

FlowRouter.route('/change-password', {
  name: 'change-password',
  action() {
    mount(MainLayout, {
      header: (<Header />),
      content: (<ChangePassword />)
    })
  }
});

FlowRouter.route('/reset-password', {
  name: 'reset-password',
  action() {
    mount(MainLayout, {
      header: (<Header />),
      content: (<ResetPassword />)
    })
  }
});

FlowRouter.route('/profile', {
  name: 'profile',
  action(params) {
    mount(MainLayout, {
      header: (<Header  />),
      content: <Profile />
    });
  }
});
