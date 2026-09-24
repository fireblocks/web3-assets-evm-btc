"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETHERLINK_GY17RJ_TEST = void 0;
const types_1 = require("../../../types");
exports.ETHERLINK_GY17RJ_TEST = {
    type: "native",
    id: "ETHERLINK_GY17RJ_TEST",
    name: "Etherlink Test",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 127823,
    rpcUrl: "https://etherlink-testnet.rpc.thirdweb.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
