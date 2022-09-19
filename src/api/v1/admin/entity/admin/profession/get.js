const { getStartDate, getEndDate } = require('../../../helper/getDates');
const { getBestProfessionRepo } = require("../../../repository");

const checkResults = (results) => (
  results[0].total ? results[0] : {}
);

const sendResponse = (res, summaryByProfession) => res.status(200).json(summaryByProfession);

const getBestProfession = async (req, res, next) => {
  try {
    const startDate = getStartDate(req.query);
    const endDate = getEndDate(req.query);
    const [results] = await getBestProfessionRepo(startDate, endDate);
    const summaryByProfession = checkResults(results);

    sendResponse(res, summaryByProfession);
  } catch (error) {
    next(error);
  }
};

module.exports = getBestProfession;
