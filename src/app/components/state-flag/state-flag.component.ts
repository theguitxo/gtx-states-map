import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-state-flag',
    templateUrl: './state-flag.component.html',
    styleUrls: ['./state-flag.component.scss'],
})
export class StateFlagComponent implements OnInit {
    constructor(
        private http: HttpClient,
    ){}

    ngOnInit(): void {
        this.http.get('./assets/flags/flags.json').subscribe(
            value => console.log(value),
        );
    }
}