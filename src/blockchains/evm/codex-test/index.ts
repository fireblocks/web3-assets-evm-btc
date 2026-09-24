import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const CODEX_TEST: NativeAssetConfig = {
  type: 'native',
  id: 'CODEX_TEST',
  name: 'Codex Testnet',
  symbol: 'COD',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 812242,
  rpcUrl: 'https://rpc.codex-stg.xyz',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
