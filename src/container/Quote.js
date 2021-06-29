import { useState, useEffect } from "react";
import { FormQuote } from "../components/FormQuote";
import { useSelector, useDispatch } from "react-redux";
import { getCouriers } from "../redux/Courier/action";
import { priceQuotation } from "../redux/Price/action";
import { Table, Modal } from "antd";
import { quoteTableColumns } from "../columnsConfig";
import { Loading } from "../components/Loading";
import { Shipping } from "./Shipping";

export const Quote = () => {
  const [objQuote, setObjQuote] = useState({});
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { prices, lowerPrice, loading, error } = useSelector(
    (store) => store.priceReducer
  );
  const { couriersMapping } = useSelector((store) => store.courierReducer);
  const dispatch = useDispatch();

  const onChange = (prop) => {
    setObjQuote({ ...objQuote, ...prop });
  };

  const onSubmit = () => {
    dispatch(priceQuotation(objQuote));
  };

  const onCompleteShipping = () => {
    setIsModalVisible(false);
  };

  useEffect(function () {
    dispatch(getCouriers());
  }, []);

  useEffect(() => {
    if (
      objQuote.height &&
      objQuote.width &&
      objQuote.length &&
      objQuote.weight &&
      objQuote.originId &&
      objQuote.destinyId &&
      objQuote.typeOfDestiny
    ) {
      setDisabledSubmit(false);
    }
  }, [objQuote]);

  return (
    <>
      <FormQuote
        onChange={onChange}
        onSubmit={onSubmit}
        disabledSubmit={disabledSubmit}
      />
      <Loading loading={loading} />
      {prices.length > 0 && (
        <Table
          title={() => "Resultado de tu cotizacion"}
          columns={quoteTableColumns(couriersMapping)}
          dataSource={prices}
          pagination={false}
          loading={loading}
          onRow={() => {
            return {
              onClick: () => setIsModalVisible(true),
            };
          }}
        />
      )}
      {lowerPrice.length > 0 && (
        <Table
          title={() =>
            "Courier seleccionado segun configuracion predeterminada"
          }
          columns={quoteTableColumns(couriersMapping)}
          dataSource={lowerPrice}
          pagination={false}
          loading={loading}
          onRow={() => {
            return {
              onClick: () => setIsModalVisible(true),
            };
          }}
        />
      )}

      <Modal
        title="Generar envio"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Shipping quote={objQuote} onCompleteShipping={onCompleteShipping} />
      </Modal>
    </>
  );
};
