import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const GUN_GUNZILLA_TEST: NativeAssetConfig = {
  type: "native",
  id: "GUN_GUNZILLA_TEST",
  name: "Gun Gunzilla Testnet",
  symbol: "GUN",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 49321,
  rpcUrl:
    "https://rpc.gunz.dev/ext/bc/ryk9vkvNuKtewME2PeCgybo9sdWXGmCkBrrx4VPuZPdVdAak8/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
