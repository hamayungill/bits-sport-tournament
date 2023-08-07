// require('dotenv').config();

// export const ENV = {
//     current_network: process.env.REACT_APP_NETWORK,
    
//     //Blockchain related variables
//     requiredChainName: process.env.REACT_APP_REQUIRED_CHAIN_NAME,
//     requiredChainId: parseInt(process.env.REACT_APP_REQUIRED_CHAIN_ID),
//     networks: { [parseInt(process.env.REACT_APP_ETH_CHAIN)]: process.env.REACT_APP_ETH_CHAIN },
//     nativeCurrencies: {
//         [parseInt(process.env.REACT_APP_ETH_CHAIN)]: {
//             name: process.env.REACT_APP_ETH_NAME,
//             symbol: process.env.REACT_APP_ETH_CURRENCY_SYMBOL,
//             decimals: parseInt(process.env.REACT_APP_ETH_CURRENCY_DECIMALS),
//         },
//     },
//     web3Providers: {
//         [parseInt(process.env.REACT_APP_ETH_CHAIN)]: process.env.REACT_APP_ETH_RPC,
//     },
//     explorers: {
//         [parseInt(process.env.REACT_APP_ETH_CHAIN)]: process.env.REACT_APP_ETH_EXPLORER,
//     },
//     contractAddress: {

//     },
//     formattedAddress: (address) => {
//         return `${address?.slice(0, 5)}...${address?.slice(-5)}`
//     },
// }