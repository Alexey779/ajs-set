export default class Team {
  constructor() {
    this.members = new Set();
  }

  match(character) {
    for (const member of this.members) {
      if (JSON.stringify(member) === JSON.stringify(character)) {
        return true;
      }
    }
    return false;
  }

  add(character) {
    if (this.match(character)) {
      throw new Error('Такой персонаж уже существует');
    }

    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((char) => this.match(char) || this.members.add(char));
  }

  toArray() {
    return [...this.members];
  }
}
