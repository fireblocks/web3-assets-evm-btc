import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const VLX_TEST: NativeAssetConfig = {
  type: "native",
  id: "VLX_TEST",
  name: "Velas Testnet",
  symbol: "VLX",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 111,
  rpcUrl: "https://explorer.testnet.velas.com/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
