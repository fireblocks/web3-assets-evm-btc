import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ROBINHOOD_CHAIN_TESTNET_TEST: NativeAssetConfig = {
  type: "native",
  id: "ROBINHOOD_CHAIN_TESTNET_TEST",
  name: "Robinhood Chain Testnet",
  symbol: "ROB",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 46630,
  rpcUrl: "https://rpc.testnet.chain.robinhood.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
