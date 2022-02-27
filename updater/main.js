const db = require('../db/mysqldb');
const Logger = require('../utils/logger');
const getBuildsByElement = require('../utils/retrieve');

const log = new Logger();

const insertElement = (element, doc) => {
    return new Promise((success, failure) => {
        const json = JSON.stringify(doc);
        const now = new Date();
        db.query('INSERT INTO JSONDoc (element, data, updated) VALUES(?,?,?)', [element, json, now], (err, row) => {
            if (err) return failure(err);
            if (row) return success(row);
        });
    });
}

const updateElementById = (element, doc) => {
    return new Promise((success, failure) => {
        const json = JSON.stringify(doc);
        const now = new Date();
        const stmt = 'UPDATE JSONDoc SET data = (?), updated = (?) WHERE element = (?)';
        db.query(stmt, [json, now, element], (err, row) => {
            if (err) return failure(err);
            if (row) return success(row);
        });
    });
}

const batchUpdateElements = async () => {
    const elements = [
        'pyro',
        'hydro',
        'anemo',
        'electro',
        //'dendro',
        'cryo',
        'geo',
    ];
    for (const element of elements) {
        getBuildsByElement(element)
            .then(res => {
                const json = JSON.stringify(res);
                updateElementById(element, json)
                    .then(() => log.info(new Date(), `successfully updated ${element} row`))
                    .catch(() => log.err(new Date(), `failed to update ${element} row`))
            });
    }
}

const batchInsertElements = () => {
    const elements = [
        'pyro',
        'hydro',
        'anemo',
        'electro',
        //'dendro',
        'cryo',
        'geo',
    ]
    for (const element of elements) {
        getBuildsByElement(element)
            .then(res => {
                const json = JSON.stringify(res);
                insertElement(element, json).then(
                    () => log.info(`successfully initalizated ${element} row`)
                );
            });
    }
}

module.exports = {
    insertElement: insertElement,
    updateElementById: updateElementById,
    batchInsertElements: batchInsertElements,
    batchUpdateElements: batchUpdateElements,
}
