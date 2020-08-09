const { Router } = require('express')
const validator = require('./validator')
const controller = require('./controller')

const routes = Router()

routes.post('/download', [
  validator.validateUrl,
  validator.validateVideo,
  validator.validateFormat
], controller.download)

module.exports = routes