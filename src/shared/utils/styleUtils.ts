export const styleUtils = {
  lineHeightFixer: (fontSize: number, lineHeight: string): string => {
    const lineHeightPercentage = parseInt(lineHeight.replace('%', ''), 10);
    return fontSize * (lineHeightPercentage / 100) + 'px';
  },
};
