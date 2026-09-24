import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const GUN_GUNZILLA: NativeAssetConfig = {
  type: "native",
  id: "GUN_GUNZILLA",
  name: "GUNZ",
  symbol: "GUN",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 43419,
  rpcUrl:
    "https://rpc.gunzchain.io/ext/bc/2M47TxWHGnhNtq6pM5zPXdATBtuqubxn5EPFgFmEawCQr9WFML/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
