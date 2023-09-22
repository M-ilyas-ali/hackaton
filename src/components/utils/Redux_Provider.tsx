"use client";
import React from "react";
import { Provider } from "react-redux";
import { Store } from "@/Redux_Store/Store";
const Redux_Provider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={Store}> {children} </Provider>;
};
export default Redux_Provider;