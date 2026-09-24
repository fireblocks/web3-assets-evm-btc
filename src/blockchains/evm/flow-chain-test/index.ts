import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const FLOW_CHAIN_TEST: NativeAssetConfig = {
  type: 'native',
  id: 'FLOW_CHAIN_TEST',
  name: 'Flow EVM Testnet',
  symbol: 'FLOW',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 545,
  rpcUrl: 'https://testnet.evm.nodes.onflow.org',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
