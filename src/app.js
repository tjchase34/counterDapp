// Express setup
var express = require('express'),
    app = express();

    // Web3 with our Ganache chain address 
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545/'));

const abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "decrement",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "increment",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

const address = '0xB64078F6428729Ad4E889FCE3dfe075A8Fb48959';

var counterContract = web3.eth.Contract(abi, address);

// counterContract.methods.get().call().then(function(r, e) {
//     console.log("Count is: " + r);
// });

app.use(express.static(__dirname));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/getCount", (req, res) => {
    counterContract.methods.get().call().then(function(r, e) {
        console.log("Count is: " + r);
        res.send(JSON.stringify(r));
    });
});

app.post("/increment", (req, res) => {
    counterContract.methods.increment().send(
        {from: '0x0314dC41EbbEdE2e2C15565B41767d81158355a9'}).then(function(r, e) {
        console.log("Success!");
        res.send(JSON.stringify("Success!"));
    });
});

app.post("/decrement", (req, res) => {
    counterContract.methods.decrement().send(
        {from: '0x0314dC41EbbEdE2e2C15565B41767d81158355a9'}).then(function(r, e) {
        console.log("Success!");
        res.send(JSON.stringify("Success!"));
    });
});

var port = 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});
