import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const TELOS_TEST: NativeAssetConfig = {
  type: "native",
  id: "TELOS_TEST",
  name: "Telos EVM Test",
  symbol: "TEL",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 41,
  rpcUrl: "https://testnet.telos.net/evm",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
