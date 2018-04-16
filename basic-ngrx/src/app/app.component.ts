import { Component } from '@angular/core';
import {
    AddItem,
    Item
} from './app.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-root',
    template: `
        <div style="text-align:center">
            <h1>
                Welcome to NGRX!
            </h1>
            <input type="text" #input/>
            <button (click)="addItem(input.value)">add</button>
            <ul>
                <li>item name <span>x</span></li>
            </ul>
        </div>

    `,
    styles: []
})
export class AppComponent {

    constructor(private store: Store<Item[]>) {
    }

    addItem(title: string){
        this.store.dispatch(new AddItem({title, completed: false}))
    }
}
