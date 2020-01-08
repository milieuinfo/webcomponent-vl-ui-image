
const { assert, driver } = require('vl-ui-core').Test;
const VlImagePage = require('./pages/vl-image.page');

describe('vl-image', async () => {
    const vlImagePage = new VlImagePage(driver);

    before(() => {
        return vlImagePage.load();
    });
});
