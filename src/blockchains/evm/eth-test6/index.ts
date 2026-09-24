import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_TEST6: NativeAssetConfig = {
  type: "native",
  id: "ETH_TEST6",
  name: "Ethereum Testnet Holesky",
  symbol: "ETH6",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 17000,
  rpcUrl: "https://ethereum-holesky.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
