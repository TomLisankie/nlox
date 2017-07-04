'use strict';

describe('Parser - equality', () => {
  const parseAndPrint = require('./common').parseAndPrint;

  it('6 != 9;', () => {
    parseAndPrint('6 != 9;', '( statement ( != 6 9 ) )');
  });

  it('6 == 9;', () => {
    parseAndPrint('6 == 9;', '( statement ( == 6 9 ) )');
  });
});
