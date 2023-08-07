// import Web3 from 'web3';
// import { ENV } from './../config/config';

// const { requiredChainId } = ENV;
// let requiredChainIds = [requiredChainId]

// const call = (method, params) => {
//     // eslint-disable-next-line no-undef
//     return new Promise((resolve, reject) => {
//         method(...params)
//             .call()
//             .then((res) => {
//                 resolve(res);
//             })
//             .catch((err) => {
//                 reject(err);
//             });
//     });
// };

// const send = (method, params, from, value = 0) => {
//     // eslint-disable-next-line no-undef
//     return new Promise((resolve, reject) => {
//         method(...params)
//             .send({ from, value })
//             .then((res) => {
//                 resolve(res);
//             })
//             .catch((err) => {
//                 reject(err);
//             });
//     });
// };

// const methods = {
//     call,
//     send,
// };

// export const getWeb3 = () => {
//     if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         return web3;
//     }
//     else {
//         return false;
//     }
// }

// export const connectToWallet = async () => {
//     let web3;
//     try {
//         if (window.ethereum) {
//             web3 = new Web3(window.ethereum)
//             await window.ethereum.enable()
//         } else if (window.web3) {
//             web3 = new Web3(window.web3.currentProvider || "http://127.0.0.1:7545")
//         }
//         const accounts = await web3.eth.getAccounts();
//         return accounts[0]
//     } catch (error) {
//         console.log("Error: ", error)
//     }
// }


// export const weitoEth = async (amount) => {
//     const web3 = await getWeb3();
//     if (!web3 || !amount) {
//       return 0;
//     }
//     const etherValue = await web3.utils.fromWei(`${amount}`, "ether");
//     return etherValue;
// };