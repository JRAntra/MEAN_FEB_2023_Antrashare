import { LimitedTwentyCharacterPipe } from './limited-twenty-character.pipe';

describe('LimitedTwentyCharacterPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitedTwentyCharacterPipe();
    expect(pipe).toBeTruthy();
  });
});
