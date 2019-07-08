// const HOST = 'http://localhost:8080';
const HOST = 'http://192.168.100.8:8080';

export const CCBST_INJECTABLES = [
    { provide: 'MARCA_ENDPOINT', useValue: HOST + '/marcas/' },
    { provide: 'MEDIDA_ENDPOINT', useValue: HOST + '/medidas/' },
    { provide: 'TIPO_ESTABELECIMENTO_ENDPOINT', useValue: HOST + '/tipo-estabelecimento/' },
    { provide: 'TIPO_PRODUTO_ENDPOINT', useValue: HOST + '/tipo-produto/' },

    { provide: 'PAGE_SIZE', useValue: '20' },
];