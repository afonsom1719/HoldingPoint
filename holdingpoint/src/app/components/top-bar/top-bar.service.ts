import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TopBarService {
    selectedTab$ = new BehaviorSubject<number>(0);

    constructor() {}

    setSelectedTab(tabIndex: number): void {
        this.selectedTab$.next(tabIndex);
    }
}