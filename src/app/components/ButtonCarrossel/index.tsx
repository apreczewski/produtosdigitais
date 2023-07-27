import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

import { Button } from "./styles";

interface ButtonCarrosselPros {
  icon: FontAwesomeIconProps["icon"];
  className: string;
  callback: () => void;
}

export const ButtonCarrossel = ({ icon, className, callback }: ButtonCarrosselPros) => {
  return (
    <Button
      className={className}
      onClick={callback}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};
