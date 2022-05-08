import { getLanguage } from '../../states';
import keys from './keys';

function drawUppercase(keysContainer) {
    const lang = getLanguage();
    keysContainer.childNodes.forEach((child, index) => {
        const keyOrigin = keys[index];
        let newKeyValue = null;

        if (lang === 'ru' && keyOrigin.translates && keyOrigin.translates.ru.shiftValue) {
            newKeyValue = keyOrigin.translates.ru.shiftValue;
        } else {
            newKeyValue = keyOrigin.shiftValue || keyOrigin.defaultValue;
        }
        child.innerHTML = newKeyValue;
    });
}

function drawLowercase(keysContainer) {
    const lang = getLanguage();
    keysContainer.childNodes.forEach((child, index) => {
        const keyOrigin = keys[index];
        let newKeyValue = null;

        if (lang === 'ru' && keyOrigin.translates) {
            newKeyValue = keyOrigin.translates.ru.defaultValue;
        } else {
            newKeyValue = keyOrigin.defaultValue;
        }
        child.innerHTML = newKeyValue;
    });
}

export { drawLowercase, drawUppercase };
