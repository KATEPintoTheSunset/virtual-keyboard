import { removeCommandSequnce } from '../../states'

export default function checkKeysSequence(commandsSequence){
    let commandActionPosition = commandsSequence.indexOf('command');

    while(commandsSequence[commandActionPosition + 1] === 'command' || commandsSequence[commandActionPosition + 1] === 'shift'){
        commandActionPosition++;
    }
    
    if(commandActionPosition === -1){
        removeCommandSequnce();
        return;
    }

    if(commandsSequence.length > commandActionPosition && commandsSequence[commandActionPosition + 1] === 'space'){
        removeCommandSequnce();
        return 'translate';
    }
    return;
}