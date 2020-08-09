const formats = {
  MP3: 'mp3',
  MP4: 'mp4'
}

const statuses = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}

const messages = {
  INVALID_URL: 'Invalid link to video or playlist.',
  INVALID_FORMAT: 'Invalid format.',
  VIDEO_DOES_NOT_EXIST: 'Video does not exist.'
}

const constants = {
  formats,
  messages,
  statuses,
}

module.exports = constants