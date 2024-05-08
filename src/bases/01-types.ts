export let name = 'Greg';
export const age: number = 34;
export const isValid: boolean = true;

name = 'Harrinson';

export const templateString = `Hello, ${name} your age is: ${age} !
${isValid ? 'Valid' : 'Invalid'}
some text here
another text here
operator: ${1 + 1}`;

console.log(templateString);