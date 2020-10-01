const {body, validationResult} = require("express-validator");
const {sanitizeBody} = require("express-validator");
const teamModel = require('../Models/TeamModel');
var mongoose = require("mongoose");
const apiResponse = require("../helpers/apiResponse");
mongoose.set("useFindAndModify", false);

function TeamData(data) {
    this.id = data._id;
    this.teamName = data.teamName;
}
exports.getTeam = [
    function (req,res){
        if (!mongoose.Types.ObjectId.isValid(req.params.teamId)) {
            return apiResponse.ErrorResponse(res, "Team Not found");
        }
        try {
            teamModel.findOne({_id: req.params.teamId}).then((team) => {
                if (team !== null) {
                    let teamData = new TeamData(team);
                    return apiResponse.successResponseWithData(res, "Operation success", teamData)
                } else {
                    return apiResponse.successResponseWithData(res, "No team Found", {});
                }
            });

        } catch (err) {
            //throw error in json response with status 500.
            return apiResponse.ErrorResponse(res, err);
        }
    }
]
