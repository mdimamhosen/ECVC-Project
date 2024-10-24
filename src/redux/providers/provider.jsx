"use client";

import { Provider } from "react-redux";
import React from "react";

import store from "../reducer";

export const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
