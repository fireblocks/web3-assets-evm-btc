import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETHEREAL_TEST: NativeAssetConfig = {
  type: "native",
  id: "ETHEREAL_TEST",
  name: "Ethereal Testnet",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 13374202,
  rpcUrl: "https://rpc.etherealtest.net",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
