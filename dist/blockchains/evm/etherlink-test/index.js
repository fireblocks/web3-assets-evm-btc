"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETHERLINK_TEST = void 0;
const types_1 = require("../../../types");
exports.ETHERLINK_TEST = {
    type: "native",
    id: "ETHERLINK_TEST",
    name: "Etherlink Testnet",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 128123,
    rpcUrl: "https://etherlink-testnet.rpc.thirdweb.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
