# Contracts API

The REST API for contracts is described below.

## List Contracts

`GET /api/v1/contracts/`

### Request - 200

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/contracts' \
--header 'profile_id: 4'
```

###### Response

```
HTTP/1.1 200 OK
    Date: Sun, 18 Sep 2022 14:12:21 GMT
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 487

    [
        {
            "id": 7,
            "terms": "bla bla bla",
            "status": "in_progress",
            "createdAt": "2022-09-18T14:06:09.957Z",
            "updatedAt": "2022-09-18T14:06:09.957Z",
            "ContractorId": 7,
            "ClientId": 4
        },
        {
            "id": 8,
            "terms": "bla bla bla",
            "status": "in_progress",
            "createdAt": "2022-09-18T14:06:09.957Z",
            "updatedAt": "2022-09-18T14:06:09.957Z",
            "ContractorId": 6,
            "ClientId": 4
        },
        {
            "id": 9,
            "terms": "bla bla bla",
            "status": "in_progress",
            "createdAt": "2022-09-18T14:06:09.957Z",
            "updatedAt": "2022-09-18T14:06:09.957Z",
            "ContractorId": 8,
            "ClientId": 4
        }
    ]
```

### Request - 404

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/contracts' \
--header 'profile_id: 5'
```

###### Response

```
HTTP/1.1 404 Not Found
    Date: Sun, 18 Sep 2022 14:22:28 GMT
    Status: 404 Not Found
    Content-Type: application/json
    Content-Length: 58

    {
      "message": "Profile has no active contracts",
      "status": 404
    }
```

### Request - 412

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/contracts' \
--header 'profile_id: 12'
```

###### Response

```
HTTP/1.1 412 Precondition Failed
    Date: Sun, 18 Sep 2022 14:32:00 GMT
    Status: 412 Precondition Failed
    Content-Type: application/json
    Content-Length: 76

    {
      "message": "No profile has found for the requested profile_id",
      "status": 412
    }
```

## Get Contract

`GET /api/v1/contracts/:id`

### Request - 200

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/contracts/9' \
--header 'profile_id: 4'
```

###### Response

```
HTTP/1.1 200 OK
    Date: Sun, 18 Sep 2022 14:40:20 GMT
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 161

    {
      "id": 9,
      "terms": "bla bla bla",
      "status": "in_progress",
      "createdAt": "2022-09-18T14:36:49.794Z",
      "updatedAt": "2022-09-18T14:36:49.794Z",
      "ContractorId": 8,
      "ClientId": 4
    }
```

### Request - 404

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/contracts/6' \
--header 'profile_id: 4'
```

###### Response

```
HTTP/1.1 404 Not Found
    Date: Sun, 18 Sep 2022 14:22:28 GMT
    Status: 404 Not Found
    Content-Type: application/json
    Content-Length: 48

    {
      "message": "No contract has found",
      "status": 404
    }
```

### Request - 412

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/contracts/6' \
--header 'profile_id: 12'
```

###### Response

```
HTTP/1.1 412 Precondition Failed
    Date: Sun, 18 Sep 2022 14:53:01 GMT
    Status: 412 Precondition Failed
    Content-Type: application/json
    Content-Length: 76

    {
      "message": "No profile has found for the requested profile_id",
      "status": 412
    }
```
