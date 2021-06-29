import { useState, useEffect } from "react";
import { FormShipping } from "../components/FormShipping";
import { createShipping } from "../redux/Shipping/action";
import { useSelector, useDispatch } from "react-redux";

export const Shipping = ({ quote, onCompleteShipping }) => {
  const dispatch = useDispatch();
  const [objShipping, setObjShipping] = useState({
    kind: 0,
    platform: 2,
    items: 1,
    courier: {},
    destiny: { kind: "home_delivery" },
    sizes: {},
    insurance: {
      extra: true,
    },
  });
  const { lastShipping } = useSelector(
    (store) => store.shippingReducer
  );

  const onChangeDestiny = (prop) => {
    setObjShipping({
      ...objShipping,
      destiny: { ...objShipping.destiny, ...prop },
    });
  };

  const onChangeDimensions = (prop) => {
    setObjShipping({
      ...objShipping,
      sizes: { ...objShipping.sizes, ...prop },
    });
  };

  const onChangeCheckout = (prop) => {
    setObjShipping({
      ...objShipping,
      insurance: { ...objShipping.insurance, ...prop },
    });
  };

  const onSubmit = () => {
    dispatch(createShipping(objShipping));
    onCompleteShipping();
  };

  useEffect(() => {
    if (quote.originId) {
      setObjShipping({
        ...objShipping,
        courier: { id: quote.originId },
        destiny: {
          commune_id: quote.originId,
          commune_name: quote.nameCommune,
        },
      });
    }
  }, [quote]);

  return (
    <FormShipping
      onChangeDestiny={onChangeDestiny}
      onChangeDimensions={onChangeDimensions}
      onChangeCheckout={onChangeCheckout}
      onSubmit={onSubmit}
      lastShipping={lastShipping}
    />
  );
};
