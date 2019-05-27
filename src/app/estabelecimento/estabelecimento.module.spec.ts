import { EstabelecimentoModule } from './estabelecimento.module';

describe('EstabelecimentoModule', () => {
  let estabelecimentoModule: EstabelecimentoModule;

  beforeEach(() => {
    estabelecimentoModule = new EstabelecimentoModule();
  });

  it('should create an instance', () => {
    expect(estabelecimentoModule).toBeTruthy();
  });
});
