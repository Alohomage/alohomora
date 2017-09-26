import { Injectable } from '@angular/core';


@Injectable()

export class NavbarService {
    visible: boolean;
    constructor() { this.visible = true; console.log('consturct1'); }
    hide() { this.visible = false; }
    show() { this.visible = true; }
}