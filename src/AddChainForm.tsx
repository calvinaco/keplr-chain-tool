import React from "react";
import { message, Button, Form, Input, InputNumber } from "antd";
import "./AddChainForm.css";
import { KeplrChainConfig } from "./keplr/types";
import { addChainToKeplr } from "./keplr/lib";

function AddChainForm() {
  const handleFinish = async (values: any) => {
    console.log(values);
    const network: KeplrChainConfig = constructKeplrChainConfig(values);
    console.log(network);
    try {
      await addChainToKeplr(network);
    } catch (err: any) {
      message.error(err.toString());
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      initialValues={{ remember: true }}
      onFinish={handleFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Chain ID"
        name="chainId"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Chain Name"
        name="chainName"
        rules={[{ required: true, max: 30 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tendermint RPC"
        name="rpc"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Cosmos REST"
        name="rest"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Stake Currency"
      >
        <Form.Item
          label="Denom"
          name="stakeCurrencyCoinDenom"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Minimum Denom"
          name="stakeCurrencyCoinMinimalDenom"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Decimals"
          name="stakeCurrencyCoinDecimals"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
      </Form.Item>

      <Form.Item
        label="Currency"
      >
        <Form.Item
          label="Denom"
          name="currenciesCoinDenom"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Minimum Denom"
          name="currenciesCoinMinimalDenom"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Decimals"
          name="currenciesCoinDecimals"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
      </Form.Item>

      <Form.Item
        label="Fee Currency"
      >
        <Form.Item
          label="Denom"
          name="feeCurrenciesCoinDenom"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Minimum Denom"
          name="feeCurrenciesCoinMinimalDenom"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Decimals"
          name="feeCurrenciesCoinDecimals"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
      </Form.Item>

      <Form.Item
        label="Bech32 Prefix"
      >
        <Form.Item
          label="Account Address"
          name="bech32AccAddr"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Account PubKey"
          name="bech32AccPub"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Validator Address"
          name="bech32ValAddr"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Validator PubKey"
          name="bech32ValPub"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Consensus Address"
          name="bech32ConsAddr"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Consensus PubKey"
          name="bech32ConsPub"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Form.Item>

      <Form.Item
        label="Coin Type"
        name="coinType"
        rules={[{ required: true }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Gas Price Step"
      >
        <Form.Item
          label="Low"
          name="gasPriceStepLow"
          rules={[{ required: true }]}
        >
          <InputNumber defaultValue={0.01} />
        </Form.Item>

        <Form.Item
          label="Average"
          name="gasPriceStepAverage"
          rules={[{ required: true }]}
        >
          <InputNumber defaultValue={0.025} />
        </Form.Item>

        <Form.Item
          label="High"
          name="gasPriceStepHigh"
          rules={[{ required: true }]}
        >
          <InputNumber defaultValue={0.04} />
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Chain
        </Button>
      </Form.Item>
    </Form>
  );
}

function constructKeplrChainConfig(values: any): KeplrChainConfig {
  return {
    // Chain-id of the Cosmos SDK chain.
    chainId: values.chainId,
    // The name of the chain to be displayed to the user.
    chainName: values.chainName,
    // RPC endpoint of the chain.
    rpc: values.rpc,
    // REST endpoint of the chain.
    rest: values.rest,
    // Staking coin information
    stakeCurrency: {
      // Coin denomination to be displayed to the user.
      coinDenom: values.stakeCurrencyCoinDenom,
      // Actual denom (i.e. uatom, uscrt) used by the blockchain.
      coinMinimalDenom: values.stakeCurrencyCoinMinimalDenom,
      // # of decimal points to convert minimal denomination to user-facing denomination.
      coinDecimals: values.stakeCurrencyCoinDecimals,
      // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
      // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
      // coinGeckoId: ""
    },
    // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
    // The 'stake' button in Keplr extension will link to the webpage.
    // walletUrlForStaking: "",
    // The BIP44 path.
    bip44: {
      // You can only set the coin type of BIP44.
      // 'Purpose' is fixed to 44.
      coinType: values.coinType,
    },
    // Bech32 configuration to show the address to user.
    // This field is the interface of
    // {
    //   bech32PrefixAccAddr: string;
    //   bech32PrefixAccPub: string;
    //   bech32PrefixValAddr: string;
    //   bech32PrefixValPub: string;
    //   bech32PrefixConsAddr: string;
    //   bech32PrefixConsPub: string;
    // }
    bech32Config: {
      bech32PrefixAccAddr: values.bech32AccAddr,
      bech32PrefixAccPub: values.bech32AccPub,
      bech32PrefixValAddr: values.bech32ValPub,
      bech32PrefixValPub: values.bech32ValPub,
      bech32PrefixConsAddr: values.bech32ConsPub,
      bech32PrefixConsPub: values.bech32ConsPub,
    },
    // List of all coin/tokens used in this chain.
    currencies: [
      {
        // Coin denomination to be displayed to the user.
        coinDenom: values.currenciesCoinDenom,
        // Actual denom (i.e. uatom, uscrt) used by the blockchain.
        coinMinimalDenom: values.currenciesCoinMinimalDenom,
        // # of decimal points to convert minimal denomination to user-facing denomination.
        coinDecimals: values.currenciesCoinDecimals,
        // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
        // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
        // coinGeckoId: ""
      },
    ],
    // List of coin/tokens used as a fee token in this chain.
    feeCurrencies: [
      {
        // Coin denomination to be displayed to the user.
        coinDenom: values.feeCurrenciesCoinDenom,
        // Actual denom (i.e. uatom, uscrt) used by the blockchain.
        coinMinimalDenom: values.feeCurrenciesCoinMinimalDenom,
        // # of decimal points to convert minimal denomination to user-facing denomination.
        coinDecimals: values.feeCurrenciesCoinDecimals,
        // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
        // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
        // coinGeckoId: ""
      },
    ],
    // (Optional) The number of the coin type.
    // This field is only used to fetch the address from ENS.
    // Ideally, it is recommended to be the same with BIP44 path's coin type.
    // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
    // So, this is separated to support such chains.
    coinType: values.coinType,
    // (Optional) This is used to set the fee of the transaction.
    // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
    // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
    // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
    gasPriceStep: {
      low: values.gasPriceStepLow,
      average: values.gasPriceStepAverage,
      high: values.gasPriceStepHigh,
    },
  };
}

export default AddChainForm;
