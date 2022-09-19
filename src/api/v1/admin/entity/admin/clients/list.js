const { getStartDate, getEndDate } = require('../../../helper/getDates');
const { listBestClientsRepo } = require("../../../repository");

const foundRows = (results) => results.length > 0;

const checkResults = (results) => (
  foundRows(results) ? results : {}
);

const sendResponse = (res, bestClientsList) => res.status(200).json(bestClientsList);

const listBestClients = async (req, res, next) => {
  try {
    const startDate = getStartDate(req.query);
    const endDate = getEndDate(req.query);
    const { limit } = req.query;
    const [results] = await listBestClientsRepo(startDate, endDate, limit);
    const bestClientsList = checkResults(results);

    sendResponse(res, bestClientsList);
  } catch (error) {
    next(error);
  }
};

module.exports = listBestClients;
