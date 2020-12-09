import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ResultINE } from './state-datasheet.interface';

@Injectable()
export class StateDatasheetService {
  constructor(
    private httpClient: HttpClient,
  ) {
    console.log('StateDatasheet Service');
  }

  loadINEOperation(opCode: string): Observable<number> {
    return new Observable<number>((subscriber) => {
      this.httpClient.get(`https://servicios.ine.es/wstempus/js/ES/DATOS_SERIE/${opCode}?nult=1`)
        .pipe(finalize(() => subscriber.complete()))
        .subscribe(
          (data: ResultINE) => subscriber.next(data.Data[0].Valor),
          (error) => subscriber.error(),
        );
    });
  }
}
