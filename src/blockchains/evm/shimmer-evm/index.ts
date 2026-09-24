import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SMR_SMR: NativeAssetConfig = {
  type: "native",
  id: "SMR_SMR",
  name: "Shimmer EVM",
  symbol: "SMR",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 148,
  rpcUrl: "https://json-rpc.evm.shimmer.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
