import Validator from '../Validator';

test('Проверка на корректный ввод никнейма', () => {
  
  expect(Validator.validateUserName('12bugaga')).toBeFalsy();
  expect(Validator.validateUserName("__bugaga")).toBeFalsy();
})