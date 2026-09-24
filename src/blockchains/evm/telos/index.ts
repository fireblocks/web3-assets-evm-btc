import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const TELOS: NativeAssetConfig = {
  type: "native",
  id: "TELOS",
  name: "Telos EVM",
  symbol: "TEL",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 40,
  rpcUrl: "https://1rpc.io/telos/evm",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
