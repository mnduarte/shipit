import { Form, Select, Input } from "antd";
import { dropdown } from "./styles.module.css";

const { Option } = Select;

export const FormDestiny = ({ onChange }) => {
  return (
    <Form>
      <Input
        placeholder="Calle"
        onChange={(e) => onChange({ street: e.target.value })}
      />
      <Input
        placeholder="Numero"
        onChange={(e) => onChange({ number: e.target.value })}
      />
      <Input
        placeholder="Nombre Completo"
        onChange={(e) => onChange({ full_name: e.target.value })}
      />
      <Select className={dropdown} defaultValue="home_delivery" disabled>
        <Option value="home_delivery">home_delivery</Option>
      </Select>
    </Form>
  );
};
