const { listBestClientsRepo } = require("../../../repository")

const foundRows = (results) => results.length > 0

const checkResults = (results) => (
  foundRows(results) ? results : {}
);

const listBestClients = async (startDate, endDate, limit) => {
    const [results] = await listBestClientsRepo(startDate, endDate, limit)
    const bestClientsList = checkResults(results)
    return bestClientsList
};

module.exports = listBestClients