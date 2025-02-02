const express = require("express");
const routes = express.Router();

const { postSurvey } = require('../survey/createSurvey')
const { getAllSurveys, getOneSurveys, getAllSurveysByUser } = require('../survey/getSurveys')
const { answerSurvey } = require('../survey/answerSurvey')

const { uploads } = require("../../../../middlewares/img.upload");

routes.post("/survey/create", uploads.single("img"), postSurvey);
routes.post("/survey/answer/:id", answerSurvey);
routes.get("/surveys", getAllSurveys);
routes.get("/surveys/:id", getOneSurveys);
routes.get("/surveys/user/:id", getAllSurveysByUser);

module.exports = routes;