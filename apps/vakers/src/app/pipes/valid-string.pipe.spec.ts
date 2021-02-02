import { ValidStringPipe } from './valid-string.pipe';

describe('ValidStringPipe', () => {
  const pipe = new ValidStringPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('string should return true', () => {
    expect(pipe.transform('Test')).toBeTruthy()
  })

  it('empty string should return false', () => {
    expect(pipe.transform('')).toBeFalsy()
  })

  it('null value should return false', () => {
    expect(pipe.transform(null)).toBeFalsy()
  })

  it('undefinde value should return false', () => {
    expect(pipe.transform(undefined)).toBeFalsy()
  })
});
