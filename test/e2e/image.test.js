
const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlImagePage = require('./pages/vl-image.page');

describe('vl-image', async () => {
  let vlImagePage;

  before(() => {
    vlImagePage = new VlImagePage(getDriver());
    return vlImagePage.load();
  });

  it('image word geladen', async () => {
    const image = await vlImagePage.getImage();
    await assert.eventually.isTrue(image.isDisplayed());
  });
});
