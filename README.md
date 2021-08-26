# Personal Budget II
It is an extended version of [Personal Budget I](https:github.com/CyrilBaah/PersonalBudget). Which now includes an inteface for interaction and an additional feature to record transactions.
Using Envelope [Enveloping Budgeting](https://www.thebalance.com/what-is-envelope-budgeting-1293682),
The API allow users to manage budget envelopes and track the balance of each envelope.

#  How to set up locally

1. Clone the project.
2. Change the file in config/example.config.json to config/config.json. [DB set-up: Postrgres].
3. Change the example.env file to .env .
4. Run 
```sh
$ npm install 
```
5. Run
```sh
$ sequelize db:migrate
```

# How to interact with APIs Endpoints locally
### Envelopes
`Prefix: http://127.0.0.1:3000` against endpoint. Example: `http://127.0.0.1:3000/api/envelopes`
* **GET** `/api/envelopes/` Get all envelopes
* **GET** `/api/envelopes/:id` Get a single envelope
* **POST** `/api/envelopes/` Add a new envelope
* **PUT** `/api/envelopes/:id/withdraw/:amount` Withdraw from a specific envelope
* **PUT** `/api/envelopes/:id/deposit/:amount` Deposit into a specific envelope
* **PUT** `/api/envelopes/:id` Update a single envelope 
* **DELETE** `/api/envelopes/:id` Delete a single envelope 
* **PUT** `/api/envelopes/:id/transfer/:amount/transferId/:recieverId` Transfer amount from one envelope to another

### Transaction
`Prefix: http://127.0.0.1:3000` against endpoint. Example: `http://127.0.0.1:3000/api/transaction`
* **GET** `/api/transaction/` Get all transactions
* **POST** `/api/envelopes/` Add a new transaction
* **PUT** `/api/transaction/:id` Update a transaction  
* **DELETE** `/api/transaction/:id` Delete a transaction 

# How to access the application inteface locally
[Envelope Budgeting API](http://127.0.0.1:3000)