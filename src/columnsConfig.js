import { Image } from "antd";
import { toFixed } from "./tools/numbers";
export const quoteTableColumns = (couriersMapping) => [
  {
    title: "Courier",
    dataIndex: "original_courier",
    render: (courier) => {
      const { logo_url, description } = couriersMapping[courier];
      const Img = <Image width={80} alt={description} src={logo_url} />;
      return Img;
    },
  },
  {
    title: "Tipo de entrega",
    dataIndex: "type_of_destiny",
  },
  {
    title: "Plazo estimado",
    dataIndex: "name",
  },
  {
    title: "Peso Equivalente",
    dataIndex: "volumetric_weight",
  },
  {
    title: "Precio Mercado",
    dataIndex: "price",
    render: (price) => `$ ${toFixed(price)}`,
  },
];
