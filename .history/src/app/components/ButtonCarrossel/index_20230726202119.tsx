import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

import { Button } from "./styles";

interface ButtonCarrosselPros {
  icon: FontAwesomeIconProps["icon"];
  callback: () => void;
}

export const ButtonCarrossel = ({ icon, callback }: ButtonCarrosselPros) => {
  return (
    <Button
      onClick={callback}
      className="absolute top-1/2 left-2 transform -translate-y-1/2"
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};
