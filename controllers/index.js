const path = require('path');

exports.getIndex = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../client/build/index.html'));
}