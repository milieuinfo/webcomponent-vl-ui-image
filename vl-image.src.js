import { NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlImage
 * @class
 * @classdesc 
 * 
 * @extends NativeVlElement
 * 
 * @property 
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-image/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-image/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-image.html|Demo}
 * 
 */
export class VlImage extends NativeVlElement(HTMLImageElement) {

   static get _observedAttributes() {
        return [];
    }

    static get _observedClassAttributes() {
        return [];
    }

    connectedCallback() {
        this.classList.add('vl-image');
    }

    get _classPrefix() {
        return 'vl-image--';
    }

    get _stylePath() {
        return '../style.css';
    }
}

define('vl-image', VlImage, {extends: 'img'});