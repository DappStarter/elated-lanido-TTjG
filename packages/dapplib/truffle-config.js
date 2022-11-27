require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift renew mad snake good kangaroo army gather'; 
let testAccounts = [
"0xcfdbf832db96462421fe53e121692b4ddeb33aa7321622d746ca1aa3ddb12942",
"0x87f83aae7cbe3d37f12b2f9bf13cada79a5ba9a25c048d819686caec40887c02",
"0x4991f50393cc689899d615b5606259c0c12eaa8a1ab6eac1cf5324e5c0ce7a4b",
"0x516adca85437c40dad7e44310c532924824117dd8a5eb7dd31fac2fa58c79aa8",
"0x84ca8b5c4732db2991fcaa9b005fa45dbb47270e24378ea7be8bed4e05998d53",
"0x4b73f03d43c3548aabac4880eedcfb135f386be7eb017a4a51bad4d5008a662f",
"0x624f27b9f69b428f8b9e707de069300479bdd1cf079848f383bea8660a8a7c16",
"0x2b093e4f95ac350021904eb9b99a396d1baf420061c7224608e2cdc4d587b6b8",
"0xdfcd3f58262f7caa1357deda29e781d0d762f088f421cb57b9dfc765c0241a87",
"0x6f4c2e95a95795ed5008c672e690756b1ca2d6a5de46f33fe741ac39c47ffe6b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

