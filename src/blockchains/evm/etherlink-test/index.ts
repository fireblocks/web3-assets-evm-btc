import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETHERLINK_TEST: NativeAssetConfig = {
  type: "native",
  id: "ETHERLINK_TEST",
  name: "Etherlink Testnet",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 128123,
  rpcUrl: "https://etherlink-testnet.rpc.thirdweb.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
