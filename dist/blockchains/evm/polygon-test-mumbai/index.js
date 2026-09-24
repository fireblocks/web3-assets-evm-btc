"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POLYGON_TEST_MUMBAI = void 0;
const types_1 = require("../../../types");
exports.POLYGON_TEST_MUMBAI = {
    type: "native",
    id: "POLYGON_TEST_MUMBAI",
    name: "Polygon Testnet Mumbai",
    symbol: "POL",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 80001,
    rpcUrl: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
