import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const TEMPO_MODERATO_TEST: NativeAssetConfig = {
  type: "native",
  id: "TEMPO_MODERATO_TEST",
  name: "Tempo Moderato Test",
  symbol: "TEM",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 42431,
  rpcUrl: "https://rpc.testnet.tempo.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
