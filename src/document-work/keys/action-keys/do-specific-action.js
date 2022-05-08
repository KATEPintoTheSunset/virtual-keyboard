import { keys } from '../gen-keys/keys';
import { getLanguage, changeLanguage } from '../../states';

export default function doAction(action, keysContainer){
    switch(action){
        case 'translate': 
            changeLanguage();
            const lang = getLanguage();
            keysContainer.childNodes.forEach((child, index) => {
                const keyOrigin = keys[index];
                let newKeyValue = null;

                if(lang === 'ru' && keyOrigin.translates){
                    newKeyValue = keyOrigin.translates.ru.defaultValue;
                } else {
                    newKeyValue = keyOrigin.defaultValue;
                }
                child.innerHTML = newKeyValue;
            });
            break;
        default:
            return;
    }
}