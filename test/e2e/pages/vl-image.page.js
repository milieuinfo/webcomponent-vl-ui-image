const VlImage = require('../components/vl-image');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlImagePage extends Page {
    async _getImage(selector) {
        return new VlImage(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-image.html');
    }
}

module.exports = VlImagePage;
