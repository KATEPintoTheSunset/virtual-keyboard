import elementFactory from '../../common';
import keys from './keys';
import backspaceAction from '../action-keys/backspace';
import tabAction from '../action-keys/tab';
import enterAction from '../action-keys/enter';
import {
    isShiftActive,
    disableShift,
    enableShift,
    isCapsLockActive,
    enableCapsLock,
    disableCapsLock,
    add2CommandsSequence,
    getCommandsSequence,
    getLanguage,
} from '../../states';
import checkSequnce from '../action-keys/check-command-sequnce';
import doAction from '../action-keys/do-specific-action';
import { drawLowercase, drawUppercase } from './re-draw-shift-keys';

export default function addKeysCallback(keysContainer, inputStorage) {
    keys.forEach((keyObject) => {
        const key = elementFactory('button', keyObject.classNames, keyObject.id);
        let keyValue = null;
        const initLang = getLanguage();

        if (initLang === 'ru' && keyObject.translates) {
            keyValue = keyObject.translates.ru.defaultValue;
        } else {
            keyValue = keyObject.defaultValue;
        }
        key.innerHTML = keyValue;
        keysContainer.appendChild(key);
        key.addEventListener('click', () => {
            switch (keyObject.action) {
                case 'option':
                case 'control':
                    break;
                case 'backspace':
                case 'delete':
                    backspaceAction(inputStorage);
                    break;
                case 'tab':
                    tabAction(inputStorage);
                    break;
                case 'enter':
                    enterAction(inputStorage);
                    break;
                case 'capsLock':
                    isCapsLockActive() ? disableCapsLock() : enableCapsLock();
                    break;
                case 'shift': {
                    isShiftActive() ? disableShift() : enableShift();
                    isShiftActive() ? drawUppercase(keysContainer) : drawLowercase(keysContainer);
                    break;
                }
                case 'command': {
                    add2CommandsSequence(keyObject.action);
                    doAction(checkSequnce(getCommandsSequence()), keysContainer);
                    break;
                }
                case 'space': {
                    add2CommandsSequence(keyObject.action);
                    doAction(checkSequnce(getCommandsSequence()), keysContainer);
                }
                default: {
                    let input = null;
                    const lang = getLanguage();
                    if (lang === 'ru' && keyObject.translates) {
                        input = keyObject.translates.ru.defaultValue;
                        if (isShiftActive() || isCapsLockActive()) {
                            input = input.toUpperCase();
                            if (isShiftActive()) {
                                if (keyObject.translates.ru.shiftValue) {
                                    input = keyObject.translates.ru.shiftValue;
                                }
                                drawLowercase(keysContainer);
                                disableShift();
                            }
                        }
                    } else {
                        input = keyObject.defaultValue;
                        if (isShiftActive() || isCapsLockActive()) {
                            input = input.toUpperCase();
                            if (isShiftActive()) {
                                if (keyObject.shiftValue) {
                                    input = keyObject.shiftValue;
                                }
                                drawLowercase(keysContainer);
                                disableShift();
                            }
                        }
                    }
                    inputStorage.value += input;
                    break;
                }
            }
        });
    });
}
