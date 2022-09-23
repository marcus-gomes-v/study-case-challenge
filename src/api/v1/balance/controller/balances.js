const express = require('express');
const { depositMiddleware } = require('../middleware')
const { deposit } = require('../entity/balance');

const balances = express.Router();

const getModels = (req) => req.app.get('models');

const sendResponse = (res) => res.status(200).json({ message: 'The deposit was made' });

balances.post('/balances/deposit', depositMiddleware, async (req, res, next) => {
 try{
   const sequelize = req.app.get('sequelize')
   const { profile } = req;
   const { amount } = req.body
   const models = getModels(req)
   await deposit(sequelize, profile, amount, models)
   sendResponse(res)
 } catch(e){
   next(e)
 }
});

module.exports = balances;

module.exports.test = {
  sendResponse
}