import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const WMTX: NativeAssetConfig = {
  type: "native",
  id: "WMTX",
  name: "WorldMobie Chain ",
  symbol: "WMTX",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 869,
  rpcUrl: "https://worldmobilechain-mainnet.g.alchemy.com/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
