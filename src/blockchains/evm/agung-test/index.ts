import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const AGUNG_TEST: NativeAssetConfig = {
  type: "native",
  id: "AGUNG_TEST",
  name: "Agung (Testnet)",
  symbol: "AGU",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 9990,
  rpcUrl: "https://wss-async.agung.peaq.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
