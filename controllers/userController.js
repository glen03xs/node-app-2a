const User = require('../models/User')

exports.login = function(req, res) {
  res.send('Thanks for logging in')
}

exports.logout = function(req, res) {
  res.send('Thank you, Goodbye!')
}

exports.register = function(req, res) {
  let user = new User(req.body)
  user.register()

  if(user.errors.length) {
    res.send(user.errors)
  } else {
    res.send('Congrats! No error')
  }

}

exports.home = function(req, res) {
  res.render('home-guest')
}