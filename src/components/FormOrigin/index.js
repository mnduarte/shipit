import { Form, Select, Input } from "antd";
import { dropdown } from "./styles.module.css";

const { Option } = Select;

export const FormOrigin = () => {
  return (
    <Form>
        <Select className={dropdown} disabled defaultValue="default">
          <Option value="default">default</Option>
        </Select>
        <Input value="staff@shipit.cl" disabled />
        <Input value="99999999999" disabled />
        <Input value="Buenaventura" disabled />
        <Input value="1888" disabled />
        <Input value="Complemento" disabled />
        <Select className={dropdown} disabled defaultValue="vitacura">
          <Option value="vitacura" disabled>
            VITACURA
          </Option>
        </Select>
    </Form>
  );
};
