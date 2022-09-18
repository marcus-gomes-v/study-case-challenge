const oRepositoryModule = require("../repository");
const oValidatorModule = require("../validator");

const getProfileModel = (model) => model.Profile;

const getProfile = async (req, _, next) => {
    try {
        const oModel = req.app.get('models')
        const sProfileId = req.get('profile_id')
        const oProfileModel = getProfileModel(oModel)
        const oResult = await oRepositoryModule.profile.find(sProfileId, oProfileModel)
        const oProfile = oValidatorModule.profile.exists(oResult);
        req.profile = oProfile;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = getProfile;