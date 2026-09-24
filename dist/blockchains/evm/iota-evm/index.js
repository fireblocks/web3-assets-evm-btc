"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOTA_EVM = void 0;
const types_1 = require("../../../types");
exports.IOTA_EVM = {
    type: "native",
    id: "IOTA_EVM",
    name: "IOTA EVM",
    symbol: "IOTA",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 8822,
    rpcUrl: "https://json-rpc.evm.iotaledger.net",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
