"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XTZ_ETHERLINK_TEST = void 0;
const types_1 = require("../../../types");
exports.XTZ_ETHERLINK_TEST = {
    type: "native",
    id: "XTZ_ETHERLINK_TEST",
    name: "Tezos (Etherlink Testnet)",
    symbol: "XTZ",
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
