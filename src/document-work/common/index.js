function elementFactory(type, classList){
    const anotherOneElement = document.createElement(type);
    anotherOneElement.classList.add(...classList);
    return anotherOneElement;
}

export {
    elementFactory
}