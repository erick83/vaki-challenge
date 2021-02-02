import { ValidStringPipe } from './valid-string.pipe';

describe('ValidStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidStringPipe();
    expect(pipe).toBeTruthy();
  });
});
