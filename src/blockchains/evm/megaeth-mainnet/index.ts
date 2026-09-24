import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const MEGAETH_MAINNET: NativeAssetConfig = {
  type: "native",
  id: "MEGAETH_MAINNET",
  name: "MegaETH Mainnet",
  symbol: "MEG",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 4326,
  rpcUrl: "https://megaeth.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
