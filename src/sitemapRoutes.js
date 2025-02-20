import React from 'react';
import { Route } from 'react-router';

export default (
    <Route>
        <Route path="/"  />
        <Route path="/about" />
        <Route path="/company/*" />
        <Route path="/contact" />
        <Route path="/products/*" />
    </Route>
);