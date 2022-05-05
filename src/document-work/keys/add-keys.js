import { elementFactory } from '../common';
import { keys } from './keys';

function addKeysCallback(keysContainer){
    keys.forEach(keyObject => {
        const key = elementFactory('button', keyObject.classNames);
        key.innerHTML = keyObject.defaultValue;
        keysContainer.appendChild(key);
    })
}

export {
    addKeysCallback
}