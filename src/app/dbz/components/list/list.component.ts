import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
    /* cambiamos al nombre del modulo en este caso dbz (dbz-list) */
    selector: "dbz-list",
    templateUrl: "./list.component.html",
    styleUrl: "./list.component.css",
})
export class ListComponent {

    /* @Input: Define una propiedad que puede ser enviada
desde el padre hacia el componente hijo */
    @Input()
    public CharacterList: Character[] = [
        {
            name: "Trunks",
            power: 1000,
        },
    ];

    /* definimos el evento a enviar */

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();

    /* definimos el objeto a enviar con el evento creado onDelete */

    onDeletCharacter(id: string): void {
        if ( !id ) return;

        this.onDelete.emit(id);
    }
}

/* este componente fue creado por comando ng g component nombre del componente */
