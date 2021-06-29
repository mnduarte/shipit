import { ListCommunes } from "../../container/ListCommunes";
import { ListTypesOfDestiny } from "../../container/ListTypesOfDestiny";
import { FormDimensions } from "../FormDimensions";
import { Form, Select, Row, Col, Button } from "antd";
import { dropdown, title } from "./styles.module.css";

const { Option } = Select;

const DropdownCommunes = ({ loading, options, selectedValue, className }) => {
  return (
    <Select
      loading={loading}
      showSearch
      placeholder="Select commune"
      optionFilterProp="children"
      onChange={(value) => {
        const [id, name] = value.split("|");
        selectedValue({ originId: id, destinyId: id, nameCommune: name });
      }}
      className={className}
    >
      {options.length > 0 &&
        options.map((option) => (
          <Option key={option.id} value={`${option.id}|${option.name}`}>
            {option.name}
          </Option>
        ))}
    </Select>
  );
};

const DropdownTypesOfDestiny = ({ options, selectedValue, className }) => {
  return (
    <Select
      showSearch
      placeholder="Select Type of Destiny"
      optionFilterProp="children"
      onChange={(value) => selectedValue({ typeOfDestiny: value })}
      className={className}
    >
      {options.length > 0 &&
        options.map((option) => (
          <Option key={option.destiny} value={option.destiny}>
            {option.destiny}
          </Option>
        ))}
    </Select>
  );
};

export const FormQuote = ({ onChange, onSubmit, disabledSubmit }) => (
  <>
    <div className={title}>Cotiza al mejor precio</div>
    <Form>
      <Row>
        <Col span={12}>
          <ListCommunes selectedValue={onChange} className={dropdown}>
            <DropdownCommunes />
          </ListCommunes>
        </Col>
        <Col span={12}>
          <ListTypesOfDestiny selectedValue={onChange} className={dropdown}>
            <DropdownTypesOfDestiny />
          </ListTypesOfDestiny>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormDimensions onChange={onChange} />
        </Col>
      </Row>
      <Button type="primary" disabled={disabledSubmit} onClick={onSubmit}>
        Cotizar
      </Button>
    </Form>
  </>
);
