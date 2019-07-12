import { MarcaModel } from './marca.model';
import { TipoProdutoModel } from './tipo-produto.model';

export class Estabelecimento {
    id: number;    
    marca: MarcaModel;
    tipoProduto: TipoProdutoModel;
}