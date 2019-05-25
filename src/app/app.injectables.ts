const HOST = 'http://192.168.1.100:8000';

export const CCBST_INJECTABLES = [
    { provide: 'MARCA_ENDPOINT', useValue: HOST + '/marcas/' },
    { provide: 'MEDIDA_ENDPOINT', useValue: HOST + '/medidas/' },
    { provide: 'TIPO_ESTABELECIMENTO_ENDPOINT', useValue: HOST + '/tipo-estabelecimento/' },

    { provide: 'PAGE_SIZE', useValue: '20' },
];