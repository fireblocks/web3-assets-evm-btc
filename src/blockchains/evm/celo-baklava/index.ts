import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const CELO_BAK: NativeAssetConfig = {
  type: "native",
  id: "CELO_BAK",
  name: "Celo Baklava",
  symbol: "CELO",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 62320,
  rpcUrl: "https://baklava-forno.celo-testnet.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
