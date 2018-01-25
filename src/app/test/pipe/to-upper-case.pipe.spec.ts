import {ToUpperCasePipe} from './to-upper-case.pipe';
/**
 * Pipe ist eine einfache Klasse, bruacht also kein besonderen Setup.
 */
describe('ToUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new ToUpperCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('check lowercase string', () => {
    const pipe = new ToUpperCasePipe();

    // Bei einfachem toBe matchers ist in expect der wert drin.
    expect(pipe.transform('abcd')).toBe('ABCD');
  });

  it('check mixed case string', () => {
    const pipe = new ToUpperCasePipe();
    expect(pipe.transform('aBcD123')).toBe('ABCD123');
  });

  it('check number throws error', () => {
    const pipe = new ToUpperCasePipe();

    // falls ein Fehler geworfen wird, muss man bei expect eine function verwenden.
    expect(() => pipe.transform(12)).toThrow();
  });
});
