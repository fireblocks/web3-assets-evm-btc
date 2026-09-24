"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETHERLINK_SHADOWNET_TEST = void 0;
const types_1 = require("../../../types");
exports.ETHERLINK_SHADOWNET_TEST = {
    type: "native",
    id: "ETHERLINK_SHADOWNET_TEST",
    name: "Etherlink Shadownet Test",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 127823,
    rpcUrl: "https://node.shadownet.etherlink.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
