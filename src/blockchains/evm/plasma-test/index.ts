import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const PLASMA_TEST: NativeAssetConfig = {
  type: "native",
  id: "PLASMA_TEST",
  name: "Plasma Testnet",
  symbol: "PLA",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 9746,
  rpcUrl: "https://testnet-rpc.plasma.to",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
