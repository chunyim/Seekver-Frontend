import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoveredDataService {
  private hoveredData: any;

  setHoveredData(data: any): void {
    this.hoveredData = data;
  }

  getHoveredProblemId(): any {
    return this.hoveredData;
  }
}