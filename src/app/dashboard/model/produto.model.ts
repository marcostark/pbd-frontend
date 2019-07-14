import { MarcaModel } from './marca.model';
import { TipoProdutoModel } from './tipo-produto.model';
import { EstabelecimentoModel } from './estabelecimento.model';
import { ItemModel } from './item.model';
import { UsuarioModel } from './usuario.model';

export class ProdutoModel {
    id: number;    
    item: ItemModel;
    usuario: UsuarioModel;
    estabelecimento: EstabelecimentoModel;
    data_cadastro: String;
    valor: number;
}

export class ProdutoCreateUpdateModel {
    id: number;    
    item: number;
    usuario: number;
    estabelecimento: number;
    data_cadastro: String;
    valor: number;
}