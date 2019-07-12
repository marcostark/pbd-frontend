import { MarcaModel } from './marca.model';
import { TipoProdutoModel } from './tipo-produto.model';

export class Produto {
    id: number;    
    marca: MarcaModel;
    tipoProduto: TipoProdutoModel;
}