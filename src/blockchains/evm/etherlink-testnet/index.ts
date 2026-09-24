import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const XTZ_ETHERLINK_TEST: NativeAssetConfig = {
  type: "native",
  id: "XTZ_ETHERLINK_TEST",
  name: "Tezos (Etherlink Testnet)",
  symbol: "XTZ",
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
