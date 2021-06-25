require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth snow come hockey knife fortune type'; 
let testAccounts = [
"0x0ecb03d121ae3bcc4fca7be5b823d7e1f570f26e996ae90ec6d1a801b61704c8",
"0x55b5db972f0e5d644381ee0d40a32ecad9f0c0f4c85215886d66961145e6fa05",
"0xc2ae5183c35128f415a84159ad1d1971fbf67e0053e35c223758786627385fcf",
"0xf44c6a917a3eb37c2e983428bb9ab7d535fc2a3452a4a88ff7db40251ef686bb",
"0x4ffd35acf90ff95d3bb53a00ae7a530b5a5724683161f9b34e0ecf60df69ab30",
"0xcf185a264d0a09d7a2d8187e02d1b1640be9aa9d63af37739deb990d65574d11",
"0x25387132c2a4bb8f7a12701d947ddcafc499d181abc039c0e1116ccea6b53394",
"0x92c95ae5ee7ce34c832102ec492541cdf94883436da2194b6bd21f3b7ec37f73",
"0x6fb4e093bb2e4debc7bff856cb4a70c6399beb46a5f8d5d319857f0de7b80f44",
"0xd84aad509038eb10570a85651a93410cc7369681ee801a62824b02dc75637c5d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

