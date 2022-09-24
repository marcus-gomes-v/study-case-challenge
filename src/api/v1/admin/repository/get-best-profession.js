const { sequelize } = require('../../../../models');

const getRawQuery = (startDate, endDate) => (
  `SELECT
    profession,
    MAX(total) AS total
  FROM (
    SELECT
      profile.profession AS profession,
      SUM(job.price) AS total
    FROM Jobs AS job
      JOIN Contracts AS contract
        ON contract.id = job.ContractId
      JOIN Profiles AS profile
        ON contract.ContractorId = profile.id
    WHERE job.paid IS NOT NULL
    AND job.paymentDate BETWEEN '${startDate}' AND '${endDate}'
    GROUP BY profile.profession
  )`
);
const getBestProfessionActive = (startDate, endDate) => {
  const query = getRawQuery(startDate, endDate);
  return sequelize.query(query);
};
module.exports = getBestProfessionActive;
