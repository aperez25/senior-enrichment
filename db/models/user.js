'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
  name: Sequelize.STRING,
})

// DB Design

// Views: as a user I...

// see a list of all campuses on the Campuses view
// see a list of all students on the Students view
// see details about a campus on the Single Campus view, including that campus's students
// see details about a student on the Single Student view, including that student's campus

// Actions: as a user I...

// can create a campus
// can edit a campus's info, including adding/removing a student to/from that campus
// can delete a campus
// can create a student
// can edit a student's info, including the campus that student is assigned to
// can delete a student
