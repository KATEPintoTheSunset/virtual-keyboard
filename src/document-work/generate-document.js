import elementFactory from './common/index';
import addKeysCallback from './keys/gen-keys/add-keys';
import { getLanguage, setLanguage } from './states';

function genInputSection(inputContainer) {
    const inputStorage = elementFactory('textarea', ['user-input-storage']);
    inputContainer.appendChild(inputStorage);
    return inputStorage;
}

function genKeysSection(keysContainer) {
    const keysSection = elementFactory('div', ['keys-section']);
    keysContainer.appendChild(keysSection);
    return keysSection;
}

function initLanguage() {
    const lang = getLanguage();
    if (!lang) {
        setLanguage('en');
    }
}

function genDoc() {
    initLanguage();
    const keysContainer = elementFactory('div', ['keys-container']);
    const inputContainer = elementFactory('div', ['user-input-container']);

    const inputStorage = genInputSection(inputContainer);
    const keysSection = genKeysSection(keysContainer);
    addKeysCallback(keysSection, inputStorage);

    document.body.appendChild(inputContainer);
    document.body.appendChild(keysContainer);

    document.addEventListener('keydown', (event) => {
        document.getElementById(`${event.keyCode}`).classList.add('down');
        document.getElementById(`${event.keyCode}`).click();
    });
    document.addEventListener('keyup', (event) => {
        document.getElementById(`${event.keyCode}`).classList.remove('down');
    });
}

export default genDoc;
