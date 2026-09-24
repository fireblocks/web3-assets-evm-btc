import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SEISMIC_TEST: NativeAssetConfig = {
  type: "native",
  id: "SEISMIC_TEST",
  name: "Seismic Testnet",
  symbol: "SEI",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 5124,
  rpcUrl: "https://gcp-1.seismictest.net/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
