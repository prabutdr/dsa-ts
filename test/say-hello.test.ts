import sayHello from '../src/say-hello';

test('sayHello can greet a user', (): void => {
  const user = { name: 'TypeScript' };
  expect(sayHello(user)).toBe('Hello TypeScript!');
});
