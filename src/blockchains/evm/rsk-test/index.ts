import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const RSK_TEST: NativeAssetConfig = {
  type: "native",
  id: "RSK_TEST",
  name: "Rootstock Testnet",
  symbol: "RSK",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 31,
  rpcUrl: "https://rootstock-testnet.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
