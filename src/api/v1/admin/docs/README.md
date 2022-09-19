# Admin API

The REST API for Admin is described below.

## Get Best Profession

Returns the profession that earned the most money (sum of jobs paid) for any contactor that worked in the query time range.

`GET /api/v1/admin/best-profession?start=<date>&end=<date>`

### Request - 200

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/admin/best-profession?start=2020-06-10&end=2020-08-14'
```

###### Response

```
HTTP/1.1 200 OK
    Date: Mon, 19 Sep 2022 21:18:44 GMT
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 36

    {
      "profession": "Musician",
      "total": 21
    }
```

### Request - 400

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/admin/best-profession?start=2020-06&end=2020--17'
```

###### Response

```
HTTP/1.1 400 Bad Request
    Date: Mon, 19 Sep 2022 21:18:44 GMT
    Status: 400 Bad Request
    Content-Type: application/json
    Content-Length: 196

    {
      "message": "Validation error",
      "name": "ValidationError",
      "status": 400,
      "code": "validation_error",
      "error": [
          {
              "param": "end",
              "msg": "The end param must be a valid date: {YYYY-MM-DD}",
              "value": "2020--17"
          }
      ]
    }
```

## List the customers who paid the most

Returns the clients the paid the most for jobs in the query time period. limit query parameter should be applied, default limit is 2.

`GET /api/v1/admin/best-clients?start=<date>&end=<date>&limit=<integer>`

### Request - 200

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/admin/best-clients?start=2020-06-10&end=2020-08-14'
```

###### Response

```
HTTP/1.1 200 OK
    Date: Mon, 19 Sep 2022 21:18:01 GMT
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 46

    [
      {
          "id": 1,
          "fullName": "Harry Potter",
          "paid": 21
      }
    ]
```

### Request - 400

###### Request

```
curl --location --request GET 'http://localhost:3001/api/v1/admin/best-clients?start=2020-06-10&end=2020--14'
```

###### Response

```
HTTP/1.1 400 Bad Request
    Date: Mon, 19 Sep 2022 21:18:16 GMT
    Status: 400 Bad Request
    Content-Type: application/json
    Content-Length: 196

    {
      "message": "Validation error",
      "name": "ValidationError",
      "status": 400,
      "code": "validation_error",
      "error": [
          {
              "param": "end",
              "msg": "The end param must be a valid date: {YYYY-MM-DD}",
              "value": "2020--14"
          }
      ]
    }
```