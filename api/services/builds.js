const db = require('../../db/mysqldb');

const findByElement = (element) => {
    return new Promise((success, failure) => {
        db.query('SELECT data, updated FROM JSONDoc WHERE element = ?', [element], (err, row) => {
            if (err) return failure(err);
            if (row[0]) {
                if (row[0].data) {
                    const data = JSON.parse(row[0].data);
                    const updated = row[0].updated;
                    return success({
                        data: JSON.parse(data),
                        updated: updated,
                    });
                }
                return success({})
            }
            return success({})
        })
    })
}

module.exports = {
    findByElement: findByElement,
}
