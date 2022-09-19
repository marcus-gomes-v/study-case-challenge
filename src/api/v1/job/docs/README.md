# Jobs API

The REST API for Jobs is described below.

## List Unpaid Jobs

Get all unpaid jobs for a user

`GET /api/v1/jobs/unpaid`

### Request - 200

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/jobs/unpaid' \
--header 'profile_id: 4'
```

###### Response

```
HTTP/1.1 200 OK
    Date: Sun, 18 Sep 2022 21:40:15 GMT
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 340

    [
      {
          "id": 5,
          "description": "work",
          "price": 200,
          "paid": null,
          "paymentDate": null,
          "createdAt": "2022-09-18T14:36:49.794Z",
          "updatedAt": "2022-09-18T14:36:49.794Z",
          "ContractId": 7,
          "Contract": {
              "id": 7,
              "terms": "bla bla bla",
              "status": "in_progress",
              "createdAt": "2022-09-18T14:36:49.794Z",
              "updatedAt": "2022-09-18T14:36:49.794Z",
              "ContractorId": 7,
              "ClientId": 4
          }
      }
    ]
```

## Pay Job

Pay for a job, a client can only pay if his balance >= the amount to pay. The amount should be moved from the client's balance to the contractor balance.

`POST /api/v1/jobs/:job_id/pay`

### Request - 200

###### Request

```
curl --location --request POST 'http://localhost:3001/api/v1/jobs/3/pay' \
--header 'profile_id: 2'
```

###### Response

```
HTTP/1.1 200 OK
    Date: Mon, 19 Sep 2022 00:44:50 GMT
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 75

    {
      "message": "Payment for job 3 was successfully completed, Amount: $202.00"
    }
```

### Request - 404

###### Request

```
curl --location --request POST 'http://localhost:3001/api/v1/jobs/5/pay' \
--header 'profile_id: 2'
```

###### Response

```
HTTP/1.1 404 Not Found
    Date: Mon, 19 Sep 2022 01:16:55 GMT
    Status: 404 Not Found
    Content-Type: application/json
    Content-Length: 45

    {
      "message": "Job does not exist",
      "status": 404
    }
```


### Request - 412

###### Request

```
curl --location --request POST 'http://localhost:3001/api/v1/jobs/4/pay' \
--header 'profile_id: 12'
```

###### Response

```
HTTP/1.1 412 Precondition Failed
    Date: Mon, 19 Sep 2022 01:19:56 GMT
    Status: 412 Precondition Failed
    Content-Type: application/json
    Content-Length: 76

    {
      "message": "No profile has found for the requested profile_id",
      "status": 412
    }
```

### Request - 422

###### Request

```
curl --location --request POST 'http://localhost:3001/api/v1/jobs/3/pay' \
--header 'profile_id: 2'
```

###### Response

```
HTTP/1.1 422 Unprocessable Entity
    Date: Mon, 19 Sep 2022 01:17:47 GMT
    Status: 422 Unprocessable Entity
    Content-Type: application/json
    Content-Length: 50

    {
      "message": "Job was previously paid",
      "status": 422
    }
```

---

###### Request

```
curl --location --request POST 'http://localhost:3001/api/v1/jobs/4/pay' \
--header 'profile_id: 2'
```

###### Response

```
HTTP/1.1 422 Unprocessable Entity
    Date: Mon, 19 Sep 2022 01:17:47 GMT
    Status: 422 Unprocessable Entity
    Content-Type: application/json
    Content-Length: 69

    {
      "message": "Insufficient founds to process the payment",
      "status": 422
    }
```

---

###### Request
Here i need to force the error creating a bug to test properly the transaction execution


```
curl --location --request POST 'http://localhost:3001/api/v1/jobs/4/pay' \
--header 'profile_id: 2'
```

###### Response

```
HTTP/1.1 422 Unprocessable Entity
    Date: Mon, 19 Sep 2022 01:19:04 GMT
    Status: 422 Unprocessable Entity
    Content-Type: application/json
    Content-Length: 66

    {
      "message": "Unexpected error during payment process",
      "status": 422
    }
```
