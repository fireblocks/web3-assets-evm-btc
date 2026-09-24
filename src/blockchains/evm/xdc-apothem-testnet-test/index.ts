import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const XDC_APOTHEM_TESTNET_TEST: NativeAssetConfig = {
  type: "native",
  id: "XDC_APOTHEM_TESTNET_TEST",
  name: "XDC Apothem Testnet Test",
  symbol: "XDC",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 51,
  rpcUrl: "https://erpc.apothem.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
