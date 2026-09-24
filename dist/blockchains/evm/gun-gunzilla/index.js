"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUN_GUNZILLA = void 0;
const types_1 = require("../../../types");
exports.GUN_GUNZILLA = {
    type: "native",
    id: "GUN_GUNZILLA",
    name: "GUNZ",
    symbol: "GUN",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 43419,
    rpcUrl: "https://rpc.gunzchain.io/ext/bc/2M47TxWHGnhNtq6pM5zPXdATBtuqubxn5EPFgFmEawCQr9WFML/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
