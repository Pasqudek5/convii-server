const ytdl = require('ytdl-core');

const { escape } = require('./utils')

const controller = {
  async download(req, res) {
    const { url, format, title } = req.body

    res.set('Content-disposition', `attachment; filename=${escape(title)}.${format}`);

    ytdl(url, {
      format,
      quality: "highest"
    })
      .pipe(res)
  }
}

module.exports = controller