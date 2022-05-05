import { elementFactory } from './common/index';
import { addKeysCallback } from './keys/add-keys';

function genInputSection(inputContainer) {
  const inputStorage = elementFactory('div', ['user-input-storage']);
  inputContainer.appendChild(inputStorage);
}

function genKeysSection(keysContainer) {
  const keysSection = elementFactory('div', ['keys-section']);
  keysContainer.appendChild(keysSection);
  return keysSection;
}

function genDoc() {
  const keysContainer = elementFactory('div', ['keys-container']);
  const inputContainer = elementFactory('div', ['user-input-container']);

  genInputSection(inputContainer);
  const keysSection = genKeysSection(keysContainer);
  addKeysCallback(keysSection);

  document.body.appendChild(inputContainer);
  document.body.appendChild(keysContainer);
}

export default genDoc;
