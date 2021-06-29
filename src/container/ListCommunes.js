import { useEffect, cloneElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCommunes } from "../redux/Commune/action";

export const ListCommunes = ({ selectedValue, className, children }) => {
  const { communes, loading, error } = useSelector(
    (store) => store.communeReducer
  );
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(getCommunes());
  }, []);

  return (
    <>
      {cloneElement(children, {
        loading: loading,
        options: communes,
        selectedValue: selectedValue,
        className: className,
      })}
    </>
  );
};
