import { Form, Input, Space } from "antd";

const { Item } = Form;

export const FormDimensions = ({ onChange }) => {
  const tailLayout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  return (
    <Space size={2}>
      <Item label="Alto (cm)" {...tailLayout}>
        <Input onChange={(e) => onChange({ height: e.target.value })} />
      </Item>
      <Item label="Ancho (cm)" {...tailLayout}>
        <Input onChange={(e) => onChange({ width: e.target.value })} />
      </Item>
      <Item label="Largo (cm)" {...tailLayout}>
        <Input onChange={(e) => onChange({ length: e.target.value })} />
      </Item>
      <Item label="Peso (kg)" {...tailLayout}>
        <Input onChange={(e) => onChange({ weight: e.target.value })} />
      </Item>
    </Space>
  );
};
