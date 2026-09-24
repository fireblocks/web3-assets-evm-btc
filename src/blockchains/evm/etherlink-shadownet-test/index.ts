import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETHERLINK_SHADOWNET_TEST: NativeAssetConfig = {
  type: "native",
  id: "ETHERLINK_SHADOWNET_TEST",
  name: "Etherlink Shadownet Test",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 127823,
  rpcUrl: "https://node.shadownet.etherlink.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
