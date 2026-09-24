"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FLR = void 0;
const types_1 = require("../../../types");
exports.FLR = {
    type: 'native',
    id: 'FLR',
    name: 'Flare',
    symbol: 'FLR',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 554,
    decimals: 18,
    evmChainId: 14,
    rpcUrl: 'https://flare-api.flare.network/ext/C/rpc',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
__exportStar(require("./tokens"), exports);
