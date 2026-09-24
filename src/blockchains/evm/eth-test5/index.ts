import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_TEST5: NativeAssetConfig = {
  type: "native",
  id: "ETH_TEST5",
  name: "Ethereum Testnet Sepolia",
  symbol: "ETH5",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 11155111,
  rpcUrl: "https://ethereum-sepolia-rpc.publicnode.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
