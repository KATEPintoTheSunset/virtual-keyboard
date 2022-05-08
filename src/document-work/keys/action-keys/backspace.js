export default function backspaceAction(inputStorage){
    if (inputStorage.selectionStart) {
        inputStorage.value = inputStorage.value.substring(0, inputStorage.selectionStart - 1) + inputStorage.value.substring(inputStorage.selectionStart, inputStorage.value.length);
    }else {
        inputStorage.value = inputStorage.value.slice(0, -1)
    }
    
}