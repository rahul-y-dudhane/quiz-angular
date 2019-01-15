import { MatGridListModule,MatCardModule,
        MatListModule,
        MatPaginatorModule,
        MatIconModule,
    MatRadioModule } from "@angular/material";
import { NgModule } from '@angular/core';

/**
 * @description Our own module where all UI modules from
 *   material UI are imported and then exported to app module.
 */
@NgModule({
    imports:[
        MatGridListModule,
        MatCardModule,
        MatListModule,
        MatPaginatorModule,
        MatIconModule,
        MatRadioModule
    ],
    exports:[
        MatGridListModule,
        MatCardModule,
        MatListModule,
        MatPaginatorModule,
        MatIconModule,
        MatRadioModule
    ]
})
export class MatUiComponents{

}
