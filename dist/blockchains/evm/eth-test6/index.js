"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_TEST6 = void 0;
const types_1 = require("../../../types");
exports.ETH_TEST6 = {
    type: "native",
    id: "ETH_TEST6",
    name: "Ethereum Testnet Holesky",
    symbol: "ETH6",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 17000,
    rpcUrl: "https://ethereum-holesky.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
