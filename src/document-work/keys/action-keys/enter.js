export default function enterAction(inputStorage){
    inputStorage.value = inputStorage.value.substring(0, inputStorage.selectionStart) + "\n" + inputStorage.value.substring(inputStorage.selectionEnd, inputStorage.value.length);
}