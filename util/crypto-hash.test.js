const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
  const sha = "28e100a640ea9e29c99495bf724b0cfef32e6daa148c17afd146470a4202af7f";

  it('generates a SHA-256 hashed output', () => {
    expect(cryptoHash('hash-generated'))
      .toEqual(sha);
  });

  it('produces the same hash with the same input arguments in any order', () => {
    expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'two', 'one'));
  })
})