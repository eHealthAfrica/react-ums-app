import React from 'react';
import { render } from 'react-dom';
import UmsApp from './app';

const mountNode = document.getElementById('content');

const user = {
  _id: 'org.couchdb.user:dd_admin',
  _rev: '13-c7519565abbcce68ba3a2341ba3bbc76',
  name: 'dd_admin',
  roles: [
    'admin',
    'manager',
    'driver',
  ],
  disabled: false,
  accessLevel: ['all'],
};

const authorizedRole = ['admin'];

render(<UmsApp user={user} authorizedRole={authorizedRole} />, mountNode);
