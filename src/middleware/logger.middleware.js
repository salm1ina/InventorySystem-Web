const morgan = require('morgan');

module.exports = morgan(':date[iso] :remote-addr :method :url :status - :response-time ms');