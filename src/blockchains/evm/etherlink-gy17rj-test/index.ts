import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETHERLINK_GY17RJ_TEST: NativeAssetConfig = {
  type: "native",
  id: "ETHERLINK_GY17RJ_TEST",
  name: "Etherlink Test",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 127823,
  rpcUrl: "https://etherlink-testnet.rpc.thirdweb.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
