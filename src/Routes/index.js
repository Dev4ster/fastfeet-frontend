import { Switch } from 'react-router-dom';

import React from 'react';
import Route from './Route';

import Deliveryman from '~/Pages/Deliveryman';
import DeliveryProblems from '~/Pages/DeliveryProblems';
import Orders from '~/Pages/Orders';
import Profile from '~/Pages/Profile';
import Recipients from '~/Pages/Recipients';
import SignIn from '~/Pages/SignIn';
import SignUp from '~/Pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/deliverymans" component={Deliveryman} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/problems" component={DeliveryProblems} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
