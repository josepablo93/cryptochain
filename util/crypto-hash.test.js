const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
  const sha = "12cddc2d8016f6d6dfa42f2f52088c07b7102756105a64cb8070f6746c22d667";

  it('generates a SHA-256 hashed output', () => {
    expect(cryptoHash('hash-generated'))
      .toEqual(sha);
  });

  it('produces the same hash with the same input arguments in any order', () => {
    expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'two', 'one'));
  });

  it('produces a unique hash when the properties have changed on an input', () => {
    const foo = {};
    const originalHash = cryptoHash(foo);
    foo['a'] = 'a';

    expect(cryptoHash(foo)).not.toEqual(originalHash);
  })
})