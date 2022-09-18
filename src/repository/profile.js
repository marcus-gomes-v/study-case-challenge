const { iDefaultProfileId } = require('../shared')

const DEFAULT_PROFILE_ID = iDefaultProfileId;

const find = (id, ProfileModel) => (
    ProfileModel.findOne({ where: { id: id || DEFAULT_PROFILE_ID } })
);

module.exports = {
    find
};
