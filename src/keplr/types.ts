export interface KeplrChainConfig {
  chainId?: string;
  chainName?: string;
  rpc?: string;
  rest?: string;
  stakeCurrency?: Currency;
  bip44?: Bip44;
  bech32Config?: Bech32Config;
  currencies?: Currency[];
  feeCurrencies?: Currency[];
  coinType?: number;
  gasPriceStep?: GasPriceStep;
  features?: string[];
}

export interface Bech32Config {
  bech32PrefixAccAddr?: string;
  bech32PrefixAccPub?: string;
  bech32PrefixValAddr?: string;
  bech32PrefixValPub?: string;
  bech32PrefixConsAddr?: string;
  bech32PrefixConsPub?: string;
}

export interface Bip44 {
  coinType?: number;
}

export interface Currency {
  coinDenom?: string;
  coinMinimalDenom?: string;
  coinDecimals?: number;
  coinGeckoId?: string;
}

export interface GasPriceStep {
  low?: number;
  average?: number;
  high?: number;
}
