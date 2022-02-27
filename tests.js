const { insertElement, updateElementById } = require("./updater/main");
const getBuildsByElement = require("./utils/retrieve");

async function testInsertElement(element) {
    const doc = await getBuildsByElement(element);
    const res = await insertElement(element, doc);
    console.log(res)
}

async function testUpdateElement(element) {
    const doc = await getBuildsByElement(element);
    const res = await updateElementById(element, doc);
    console.log(res)
}
