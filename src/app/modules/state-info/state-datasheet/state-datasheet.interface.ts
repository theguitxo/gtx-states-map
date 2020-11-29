import { BehaviorSubject } from 'rxjs';

export interface StateInformation {
  code: string;
  flag?: string;
  opcodes: {
    population: {
      all?: string;
      men?: string;
      women?: string;
    }
  },
  name: string;
  wikipediaUrl: string;
}

export declare interface ResultINEItem {
  Anyo: number;
  FK_Periodo: number;
  FK_TipoDato: number;
  Fecha: number;
  Secreto: boolean;
  Valor: number;
};

export declare interface ResultINE {
  Data: Array<ResultINEItem>;
  FK_Escala: number;
  FK_Unidad: number;
  Nombre: string;
};

export declare interface INELoader {
  data: number;
  error: boolean;
  loading: BehaviorSubject<boolean>;
}
