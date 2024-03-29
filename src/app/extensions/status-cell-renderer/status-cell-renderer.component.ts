import {Component} from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-status-column',
  standalone: true,
  imports: [
    MatButtonModule,
    NgIf,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  template: `
      <button mat-button *ngIf="released" color="accent">
        <mat-icon>arrow_downward</mat-icon>
        Download
      </button>
      <button mat-button *ngIf="!released"
                disabled
                matTooltip="{{releaseText}}">
        <mat-icon>watch</mat-icon>
        {{releaseText}}
      </button>

  `,
  styles: [`
    .mat-icon {
      vertical-align: middle;
    }
    `]
})
export class StatusCellRendererComponent implements ICellRendererAngularComp {
  released: boolean;
  releaseText: string;

  monthYearRegExp: RegExp = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{2}|\d{4}$/i;

  agInit(params: ICellRendererParams) {
    this.generateCellValue(params);
  }

  refresh(params: ICellRendererParams) {
    this.generateCellValue(params);
    return true;
  }

  public generateCellValue(params: ICellRendererParams) {

    if (params.data['expected_release']) {
      this.released = false;
      this.releaseText = params.data['expected_release'];
      if(this.monthYearRegExp.test(this.releaseText)) {
        this.releaseText = 'Available '+this.releaseText;
      }
    } else {
      this.released = true;
    }
  }
}
