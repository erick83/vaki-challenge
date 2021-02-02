import { TodayDiffPipe } from './today-diff.pipe';

describe('TodayDiffPipe', () => {
  const pipe = new TodayDiffPipe()

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return 2', () => {
    const day = (Date.now() / 1000) + 172800
    expect(pipe.transform(day)).toBe(2)
  })
});
