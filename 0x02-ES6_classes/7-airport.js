export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }

  /* eslint-disable-next-line no-dupe-class-members */
  toString() {
    return `[object ${this._code}]`;
  }
}
