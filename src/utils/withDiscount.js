import Card from "@/components/Product/Card";
import { useState } from "react";

const WithDiscount = (Original) => {
  const [discount, setDiscount] = useState(false);

  const toggleButton = () => {
    setDiscount(true);
    if (discount) {
      return <Card />;
    }
  };

  return () => {
    <Original />;
  };
};

export default WithDiscount;
