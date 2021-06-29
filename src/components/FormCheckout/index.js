import { Form, Select, Input } from "antd";

export const FormCheckout = ({ onChange }) => {
  return (
    <Form>
      <Input
        placeholder="Numero Ticket"
        onChange={(e) => onChange({ ticket_number: e.target.value })}
      />
      <Input
        placeholder="Importe"
        onChange={(e) => onChange({ ticket_amount: e.target.value })}
      />
      <Input
        placeholder="Detalles"
        onChange={(e) => onChange({ detail: e.target.value })}
      />
    </Form>
  );
};
