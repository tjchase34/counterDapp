# Counter DAPP

Basic implementation of a front end framework for a Solidity smart contract built for the Ethereum blockchain.

## How to run full stack (web + blockchain) application

### Linux Instructions

#### Ganache setup

1. Start Ganache on `127.0.0.1:7545` (Ganache should shart at this network address by default). This starts up the local Ganace chain.
2. Open a truffle console by envoking `sudo truffle console --network development` from the `counterDapp/` directory. This opens a truffle console with a connection to the Ganache chain.
3. Execute `compile` in the truffle console.
4. Execute `migrate` in the truffle console. This deploys the `Counter.sol` smart contract on the Ganace chain.
* If you see this error when migrating: `Error: Returned values aren't valid, did it run Out of Gas?`, navigate to the `build/contracts` directory and remove the `.json` files in there ('sudo rm *'). Re-compile and migrate afterwards.

#### Start the web application

1. Navigate to `src/`.
2. Install all node dependencies by executing `npm install`.
3. Execute `npm start` to start the web application on `localhost:8080` (modifiable by editing `app.js`).

### Windows Instructions
1. Install Linux.
2. Follow Linux instructions above.

## Authors

* **Timothy Chase**

