import { isEven } from '.';

const testaIsEven = (
  value: number,
  expected: boolean
): any => {
  const input = value;

  const output = isEven(input);

  if (output === expected) {
    ('Saída da função é igual ao valor esperado');
  } else {
    `Saída da função é diferente do valor esperado.
     Eu esperava ${expected} e recebi ${output}.`;
  }

  return {
      input,
      expected,
      received: output
  }

};
