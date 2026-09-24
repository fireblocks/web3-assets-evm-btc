import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const CANVAS_TEST: NativeAssetConfig = {
  type: 'native',
  id: 'CANVAS_TEST',
  name: 'Canvas Testnet',
  symbol: 'CAN',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 2091074337,
  rpcUrl: 'https://testnet-rpc.canvas.im',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
