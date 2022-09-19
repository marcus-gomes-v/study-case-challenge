const { sequelize } = require('../../../../models');

const DEFAULT_LIMIT = 2;
const getLimit = (limit) => limit || DEFAULT_LIMIT;
const getRawQuery = (startDate, endDate, limit) => (
  `SELECT
    profile.id AS id,
    profile.firstName || ' ' || profile.lastName AS fullName,
    SUM(job.price) AS paid
  FROM Jobs AS job
    JOIN Contracts AS contract
      ON contract.id = job.ContractId
    JOIN Profiles AS profile
      ON contract.ClientId = profile.id
  WHERE job.paid IS NOT NULL
    AND job.paymentDate BETWEEN '${startDate}' AND '${endDate}'
  GROUP BY fullName
  ORDER BY paid DESC
  LIMIT ${limit};
  )`
);
const listBestClients = (startDate, endDate, limit) => {
  limit = getLimit(limit);
  const query = getRawQuery(startDate, endDate, limit);
  return sequelize.query(query);
};
module.exports = listBestClients;
