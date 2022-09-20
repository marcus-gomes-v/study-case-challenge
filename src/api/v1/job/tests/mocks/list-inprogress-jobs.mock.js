const listInProgressJobsMock = [
    {
        "id": 4,
        "description": "work",
        "price": 200,
        "paid": null,
        "paymentDate": null,
        "createdAt": "2022-09-20T08:15:50.026Z",
        "updatedAt": "2022-09-20T08:15:50.026Z",
        "ContractId": 4,
        "Contract": {
            "id": 4,
            "terms": "bla bla bla",
            "status": "in_progress",
            "createdAt": "2022-09-20T08:15:50.025Z",
            "updatedAt": "2022-09-20T08:15:50.025Z",
            "ContractorId": 7,
            "ClientId": 2
        }
    },
    {
        "id": 3,
        "description": "work",
        "price": 202,
        "paid": null,
        "paymentDate": null,
        "createdAt": "2022-09-20T08:15:50.026Z",
        "updatedAt": "2022-09-20T08:15:50.026Z",
        "ContractId": 3,
        "Contract": {
            "id": 3,
            "terms": "bla bla bla",
            "status": "in_progress",
            "createdAt": "2022-09-20T08:15:50.025Z",
            "updatedAt": "2022-09-20T08:15:50.025Z",
            "ContractorId": 6,
            "ClientId": 2
        }
    }
]

module.exports = listInProgressJobsMock