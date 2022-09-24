const { listBestClientsActive } = require("../../repository")

const foundRows = (results) => results.length > 0

const checkResults = (results) => (
  foundRows(results) ? results : {}
);

const listBestClients = async (startDate, endDate, limit) => {
    const [ listOfBestClientsActive ] = await listBestClientsActive(startDate, endDate, limit)
    const listOfBestClients = checkResults(listOfBestClientsActive)
    return listOfBestClients
};

module.exports = listBestClients
