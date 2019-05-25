const HOST = 'http://192.168.1.106:8080';

export const CCBST_INJECTABLES = [
    { provide: 'MARCA_ENDPOINT', useValue: HOST + '/marca/' },
    { provide: 'MEDIDA_ENDPOINT', useValue: HOST + '/medida/' },
    { provide: 'TIPO_ESTABELECIMENTO_ENDPOINT', useValue: HOST + '/tipo-estabelecimento/' },
    { provide: 'TIPO_PRODUTO_ENDPOINT', useValue: HOST + '/tipo-produto/' },

    { provide: 'PAGE_SIZE', useValue: '20' },
];