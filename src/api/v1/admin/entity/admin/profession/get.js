
const { getBestProfessionRepo } = require("../../../repository");

const checkResults = (results) => (
  results[0].total ? results[0] : {}
);

const getBestProfession = async (startDate, endDate) => {
  const [results] = await getBestProfessionRepo(startDate, endDate);
  const summaryByProfession = checkResults(results);
  return summaryByProfession
};

module.exports = getBestProfession;
