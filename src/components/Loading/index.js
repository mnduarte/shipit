import React from "react";
import Skeleton from "react-loading-skeleton";
import { Container } from "./styles.module.css";

export const Loading = ({ loading }) => (
  <>{loading && <Skeleton className="container" />}</>
);
