import comments from './comments';

const movieComments = [
  {
    username: 'Daniel',
    comment: 'I like it',
  },
  {
    username: 'Tim',
    comment: 'It can be better',
  },
  {
    username: 'Nicki',
    comment: 'Nice actors',
  },
];

describe('Test Number of series and comments', () => {
  test('Test Number of comments', () => {
    expect(comments(movieComments)).toBe(3);
  });
});