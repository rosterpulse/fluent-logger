import { datetime } from './utils';

describe('utils', () => {
  describe('datetime', () => {
    it('has a default method that returns the local time with the default format', () => {
      const before = '2021-05-28T18:50:04';
      const after = '2021-05-28T23:50:04.000Z';

      // @ts-ignore
      Date.now = jest.fn().mockReturnValueOnce(+new Date(before));

      const result = datetime.now();
      expect(Date.now).toHaveBeenCalledTimes(1);
      expect(result).toEqual(after);
    });
  });
});
