import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_TEST2: NativeAssetConfig = {
  type: "native",
  id: "ETH_TEST2",
  name: "Ethereum Testnet Kovan",
  symbol: "ETH2",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 42,
  rpcUrl: "https://rpc.lukso.sigmacore.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
