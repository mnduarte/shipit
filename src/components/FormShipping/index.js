import { useState, useEffect } from "react";
import { Steps, Button, message, notification } from "antd";
import { FormOrigin } from "../FormOrigin";
import { FormDestiny } from "../FormDestiny";
import { FormDimensions } from "../FormDimensions";
import { FormCheckout } from "../FormCheckout";
import { container } from "./styles.module.css";

const { Step } = Steps;

export const FormShipping = ({
  onChangeDestiny,
  onChangeDimensions,
  onChangeCheckout,
  onSubmit,
  lastShipping,
}) => {
  const [current, setCurrent] = useState(0);
  const steps = 3;

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = () => {
    message.success("Solicitud enviada!");
    setCurrent(0)
    onSubmit();
  };

  const openNotification = ({ message, description, placement }) => {
    notification.info({
      message,
      description,
      placement,
    });
  };

  useEffect(() => {
    if (lastShipping.id) {
      openNotification({
        message: "Se genero el envio",
        description: "Se ha generado el envio con exito",
        placement: "bottomRight",
      });
    }
  }, [lastShipping]);

  return (
    <>
      <Steps size="small" current={current}>
        <Step key="Origen" title="Origen" />
        <Step key="Destino" title="Destino" />
        <Step key="Dimensiones" title="Dimensiones" />
        <Step key="Precios" title="Precios" />
      </Steps>
      <div className={container}>
        {current === 0 && <FormOrigin />}
        {current === 1 && <FormDestiny onChange={onChangeDestiny} />}
        {current === 2 && <FormDimensions onChange={onChangeDimensions} />}
        {current === 3 && <FormCheckout onChange={onChangeCheckout} />}
      </div>
      <div>
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Anterior
          </Button>
        )}
        {current < steps && (
          <Button type="primary" onClick={() => next()}>
            Siguiente
          </Button>
        )}
        {current === steps && (
          <Button type="primary" onClick={handleSubmit}>
            Generar Envio
          </Button>
        )}
      </div>
    </>
  );
};
