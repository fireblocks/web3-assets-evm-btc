"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_TEST4 = void 0;
const types_1 = require("../../../types");
exports.ETH_TEST4 = {
    type: "native",
    id: "ETH_TEST4",
    name: "Ethereum Testnet Rinkeby",
    symbol: "ETH4",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 4,
    rpcUrl: "https://rinkeby.infura.io/3/9aa3d95b3bc440fa88ea12eaa4456161",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
