import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const HEDERA_EVM_TEST: NativeAssetConfig = {
  type: "native",
  id: "HEDERA_EVM_TEST",
  name: "Hedera Evm Testnet",
  symbol: "HED",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 296,
  rpcUrl: "https://296.rpc.thirdweb.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
