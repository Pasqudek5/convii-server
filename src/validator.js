const { validateURL, getBasicInfo } = require('ytdl-core');
const { statuses, formats, messages } = require('./constants');

const validator = {
  async validateUrl(req, res, next) {
    const { url } = req.body;

    const isURLValid = validateURL(url)

    if (!isURLValid) {
      return res
        .status(statuses.BAD_REQUEST)
        .json({ error: messages.INVALID_URL });
    }

    next();
  },

  async validateVideo(req, res, next) {
    const { url } = req.body;

    try {
      const { videoDetails: { title } } = await getBasicInfo(url)

      req.body.title = title

      next()
    } catch {
      res
        .status(statuses.NOT_FOUND)
        .json({ error: messages.VIDEO_DOES_NOT_EXIST })
    }
  },

  async validateFormat(req, res, next) {
    const { format } = req.body;

    const isFormatCorrect = Object.values(formats).includes(format);

    if (!isFormatCorrect) {
      return res
        .status(statuses.BAD_REQUEST)
        .json({ error: messages.INVALID_FORMAT });
    }

    next();
  }
}

module.exports = validator