import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETC: NativeAssetConfig = {
  type: "native",
  id: "ETC",
  name: "Ethereum Classic",
  symbol: "ETC",
  algorithm: Algorithm.ecdsa,
  coinType: 61,
  decimals: 18,
  evmChainId: 61,
  rpcUrl: "https://etc.rivet.link",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};

export const ETC_TEST: NativeAssetConfig = {
  type: "native",
  id: "ETC_TEST",
  name: "Ethereum Classic Testnet Mordor",
  symbol: "ETC",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  // Mordor testnet chain ID (matches the old DRS: isTestnet ? 63 : 61).
  evmChainId: 63,
  rpcUrl: "https://rpc.mordor.etccooperative.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
