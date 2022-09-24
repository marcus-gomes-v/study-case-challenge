
const { getBestProfessionActive } = require("../../repository");

const checkResults = (results) => (
  results[0].total ? results[0] : {}
);

const getBestProfession = async (startDate, endDate) => {
  const [ bestProfessionActive ] = await getBestProfessionActive(startDate, endDate);
  const bestProfession = checkResults(bestProfessionActive);
  return bestProfession
};

module.exports = getBestProfession;
