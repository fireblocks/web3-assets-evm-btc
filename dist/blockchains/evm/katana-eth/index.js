"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KATANA_ETH = void 0;
const types_1 = require("../../../types");
exports.KATANA_ETH = {
    type: "native",
    id: "KATANA_ETH",
    name: "Katana",
    symbol: "KAT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 747474,
    rpcUrl: "https://katana.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
