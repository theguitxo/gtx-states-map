import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { State } from 'projects/states-map/src/lib/state-info';
import { BehaviorSubject } from 'rxjs';
import { INELoader, StateInformation } from './state-datasheet.interface';
import * as statesData from './state-datasheet.json';
import { StateDatasheetService } from './state-datasheet.service';

@Component({
  selector: 'app-state-datasheet',
  templateUrl: './state-datasheet.component.html',
  styleUrls: ['./state-datasheet.component.scss'],
  providers: [ StateDatasheetService ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateDatasheetComponent implements OnInit, OnChanges {
  @Input('inputState') inputState: State;
  stateInfoList: StateInformation[] = (<any>statesData).default;
  stateInfo: StateInformation;

  stateFlag: string;
  populationMen: INELoader = {
    data: 0,
    error: false,
    loading: new BehaviorSubject(true),
  }
  populationWomen: INELoader = {
    data: 0,
    error: false,
    loading: new BehaviorSubject(true),
  }

  constructor(
    private dataSheetService: StateDatasheetService,
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.inputState.firstChange) {
      this.stateInfo = this.stateInfoList.find(item => item.code === this.inputState.code);
      if (this.stateInfo) {
        this.setStateInfo();
      }
    }
  }

  private setStateInfo(): void {
    this.stateFlag = `./assets/flags/${this.stateInfo.flag ? this.stateInfo.flag : '00.no_flag.png'}`;
    this.populationMen.loading.next(true);
    this.populationMen.error = false;
    this.dataSheetService.loadINEOperation(this.stateInfo.opcodes.population.men).subscribe(
      (data) => this.populationMen.data = data,
      (error) => this.populationMen.error = true,
      () => this.populationMen.loading.next(false),
    );
    this.populationWomen.loading.next(true);
    this.populationWomen.error = false;
    this.dataSheetService.loadINEOperation(this.stateInfo.opcodes.population.women).subscribe(
      (data) => this.populationWomen.data = data,
      (error) => this.populationWomen.error = true,
      () => this.populationWomen.loading.next(false),
    );
  }
}
