import React from "react";
import { message, Button } from "antd";
import "./AddChainButton.css"
import { KeplrChainConfig } from "./keplr/types";
import { addChainToKeplr } from "./keplr/lib";

function AddChainButton(props: Props) {
  const handleClick = async () => {
    try {
      await addChainToKeplr(props.network);
    } catch(err: any) {
      message.error(err.toString());
    }
  }

  return <Button className="Button" onClick={handleClick}>{props.network?.chainName} ({props.network?.chainId})</Button>;
}

export type Props = {
  network: KeplrChainConfig;
};

export default AddChainButton;
