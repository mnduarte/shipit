import React from "react";
import { Header } from "../Header";
import { container } from "./styles.module.css";

export const Layout = ({ children }) => (
  <>
    <Header />
    <div className={container}>{children}</div>
  </>
);
