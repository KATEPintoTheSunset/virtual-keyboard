const isShiftActive = () => localStorage.getItem('shift') === 'true';

const getCommandsSequence = () => {
    const sequence = localStorage.getItem('sequence');
    if (!sequence) {
        return [];
    }
    return sequence.split('|');
};

const add2CommandsSequence = (command) => {
    const commandsSequence = localStorage.getItem('sequence');
    const commandList = [];
    if (commandsSequence) {
        commandList.push(...commandsSequence.split('|'));
    }
    commandList.push(command);
    localStorage.setItem('sequence', commandList.join('|'));
};

const isCapsLockActive = () => localStorage.getItem('caps') === 'true';

const disableShift = () => {
    localStorage.removeItem('shift');
};

const enableShift = () => {
    localStorage.setItem('shift', 'true');
};

const enableCapsLock = () => {
    document.getElementById(20).classList.add('down');
    localStorage.setItem('caps', 'true');
};

const disableCapsLock = () => {
    document.getElementById(20).classList.remove('down');
    localStorage.removeItem('caps');
};

const removeCommandSequnce = () => {
    localStorage.removeItem('sequence');
};

const getLanguage = () => localStorage.getItem('language');

const setLanguage = (language) => localStorage.setItem('language', language);

const changeLanguage = () => {
    const language = getLanguage();
    if (language === 'en') {
        setLanguage('ru');
    } else {
        setLanguage('en');
    }
};

export {
    getCommandsSequence,
    isShiftActive,
    add2CommandsSequence,
    isCapsLockActive,
    disableShift,
    enableCapsLock,
    enableShift,
    disableCapsLock,
    removeCommandSequnce,
    getLanguage,
    setLanguage,
    changeLanguage,
};
