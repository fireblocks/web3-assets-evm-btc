import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const NERO_TEST: NativeAssetConfig = {
  type: "native",
  id: "NERO_TEST",
  name: "Nero Testnet",
  symbol: "NERO",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 689,
  rpcUrl: "https://rpc-testnet.nerochain.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
