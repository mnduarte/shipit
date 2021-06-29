import { cloneElement } from "react";
import { typesOfDestiny } from "../constant/typesOfDestiny";

export const ListTypesOfDestiny = ({ selectedValue, className, children }) => (
  <>
    {cloneElement(children, {
      options: typesOfDestiny,
      selectedValue: selectedValue,
      className: className,
    })}
  </>
);
