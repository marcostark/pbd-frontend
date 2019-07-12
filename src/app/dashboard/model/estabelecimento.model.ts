import { MarcaModel } from './marca.model';
import { TipoProdutoModel } from './tipo-produto.model';

export class ItemModel {
    id: number;    
    marca: MarcaModel;
    tipoProduto: TipoProdutoModel;
}