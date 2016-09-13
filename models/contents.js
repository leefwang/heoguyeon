"use strict";

var models = require('../models');
var moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  var Content = sequelize.define('content', {
    text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: moment(),
      get: function() {
        return moment(this.getDataValue('created_at')).format("YYYY-MM-DD HH:mm:ss");
      }
    }
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Content;
};
