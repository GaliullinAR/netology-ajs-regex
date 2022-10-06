export default class Validator {
  static validateUserName(name) {
    const nameFormat = /^[a-z][\w\-_]+[a-z]$/;
    const repeatSymbol = /[0-9]{3}/;
    return nameFormat.test(name) && !repeatSymbol.test(name);
  }
}
