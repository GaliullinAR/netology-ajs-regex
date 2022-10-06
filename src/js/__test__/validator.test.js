import Validator from '../Validator';

test('Проверка на корректный ввод никнейма', () => {
  expect(Validator.validateUserName('12bugaga')).toBeFalsy();
  expect(Validator.validateUserName('__bugaga')).toBeFalsy();
  expect(Validator.validateUserName('buga12ga')).toBeTruthy();
  expect(Validator.validateUserName('bug1234aga')).toBeFalsy();
});
