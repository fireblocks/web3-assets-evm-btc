"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUN_GUNZILLA_TEST = void 0;
const types_1 = require("../../../types");
exports.GUN_GUNZILLA_TEST = {
    type: "native",
    id: "GUN_GUNZILLA_TEST",
    name: "Gun Gunzilla Testnet",
    symbol: "GUN",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 49321,
    rpcUrl: "https://rpc.gunz.dev/ext/bc/ryk9vkvNuKtewME2PeCgybo9sdWXGmCkBrrx4VPuZPdVdAak8/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
