export default function elementFactory(type, classList, id) {
    const anotherOneElement = document.createElement(type);
    anotherOneElement.classList.add(...classList);
    anotherOneElement.id = id;
    return anotherOneElement;
}
