import { MarcaModel } from './marca.model';
import { LocalModel } from './local.model';
import { TipoEstabelecimentoModel } from './tipo-estabelecimento.model';

export class EstabelecimentoModel {
    id: number;    
    nome: MarcaModel;
    local: LocalModel;
    tipoEstabelecimento: TipoEstabelecimentoModel;
}