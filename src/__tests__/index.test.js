import Team from '../index';

const character1 = {
  name: 'aaa',
  type: 'Bowman',
};
const character2 = {
  name: 'aaa',
  type: 'Swordsman',
};

test('Проверка неудачного добавления персонажа.', () => {
  const input = new Team();
  input.add(character1);
  expect(() => input.add(character1)).toThrow('Такой персонаж уже существует');
});

test('Проверка добавления группы персонажей.', () => {
  const input = new Team();
  input.addAll(character1, character2, character1);
  const result = { members: new Set([character1, character2]) };
  expect(input).toEqual(result);
});

test('Проверка конвертации Set в массив.', () => {
  const input = new Team();
  input.add(character1);
  expect(input.toArray()).toEqual([character1]);
});
