# Balance API

The REST API for Balance is described below.

## Deposit Money

Deposits money into the the the balance of a client, a client can't deposit more than 25% his total of jobs to pay. (at the deposit moment)

> Important here i found an Error on API so I decide ignore the userId cause we reach the client through the profile_id

* **Requested to implement ~~( Wrong )~~**
  `POST /api/v1/balances/deposit/:userId`
* **Correctly implemented**
  `POST /api/v1/balances/deposit`

### Request - 200

###### Request

```
curl --location --request POST 'http://localhost:3001/api/v1/balances/deposit/2' \
--header 'profile_id: 2' \
--data-raw '{ 
    "amount": 50
}'
```

###### Response

```
HTTP/1.1 200 OK
    Date: Mon, 19 Sep 2022 19:26:21 GMT
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 34

    {
      "message": "The deposit was made"
    }
```

### Request - 412

###### Request

```
curl --location --request POST 'http://localhost:3001/api/v1/balances/deposit' \
--header 'profile_id: 5' \
--data-raw '{ 
    "amount": 50
}'
```

###### Response

```
HTTP/1.1 412 Precondition Failed
    Date: Mon, 19 Sep 2022 19:35:47 GMT
    Status: 412 Precondition Failed
    Content-Type: application/json
    Content-Length: 67

    {
      "message": "No client has found for the requested ID",
      "status": 412
    }
```

### Request - 422

###### Request

```
curl --location --request POST 'http://localhost:3001/api/v1/balances/deposit' \
--header 'profile_id: 2' \
--data-raw '{ 
    "amount": 150
}'
```

###### Response

```
HTTP/1.1 422 Unprocessable Entity
    Date: Mon, 19 Sep 2022 19:36:50 GMT
    Status: 422 Unprocessable Entity
    Content-Type: application/json
    Content-Length: 60

    {
      "message": "Maximum amount to deposit: $50.00",
      "status": 422
    }
```
