import { validateCharacter } from '../src';

describe('validate character', () => {
  test('Should return false for empty name', () => {
    const result = validateCharacter({
      name: '',
      life: 1500,
      strength: 300,
      defense: 500
    });
    expect(result).toBe(false);
  });

  test('Should return false for life 0', () => {
    const result = validateCharacter({
      name: 'Zero Life',
      life: 0,
      strength: 300,
      defense: 500
    });
    expect(result).toBe(false);
  });

  test('Should return false for strenght 0', () => {
    const result = validateCharacter({
      name: 'Krililin',
      life: 1500,
      strength: 0,
      defense: 500
    });
    expect(result).toBe(false);
  });

  test('Should return false for defense 0', () => {
    const result = validateCharacter({
      name: 'Broken Shield',
      life: 1500,
      strength: 300,
      defense: 0
    });
    expect(result).toBe(false);
  });

  test('Should return false for negative atributes', () => {
    const result = validateCharacter({
      name: 'Negative',
      life: -6,
      strength: -299,
      defense: -600
    });
    expect(result).toBe(false);
  });

  test('Should return true for all valid inputs', () => {
    const result = validateCharacter({
      name: 'Scorpion',
      life: 1500,
      strength: 300,
      defense: 500
    });
    expect(result).toBe(true);
  });
});
