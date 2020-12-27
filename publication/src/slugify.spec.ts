import slugify from './helper/slugify';

describe('slugify test', () => {
  beforeEach(async () => {

  });

  it('should slugify text', () => {
    const sluged = slugify("Test d'un titre ordinaire");
    expect(sluged).toEqual('test-dun-titre-ordinaire');
  });
});
