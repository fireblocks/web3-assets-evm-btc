import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CITREA: NativeAssetConfig = {
  type: "native",
  id: "CITREA",
  name: "cBTC",
  symbol: "CIT",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 4114,
  rpcUrl: "https://rpc.mainnet.citrea.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
