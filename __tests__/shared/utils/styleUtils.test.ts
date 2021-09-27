import { styleUtils } from './../../../src/shared/utils/styleUtils';
describe('styleUtils', () => {
  it('lineHeightUtil to calculate the line height', () => {
    const lineHeightPercentage = '150%';
    const fontSize = 10;
    const lineHeightUtilResult = styleUtils.lineHeightFixer(fontSize, lineHeightPercentage);
    expect(lineHeightUtilResult).toBe('15px');
  });
});
