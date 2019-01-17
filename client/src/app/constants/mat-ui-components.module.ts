import { MatGridListModule,MatCardModule,
        MatListModule,
        MatPaginatorModule,
        MatIconModule,
        MatRadioModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule

    } from "@angular/material";
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
        MatRadioModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule
    ],
    exports:[
        MatGridListModule,
        MatCardModule,
        MatListModule,
        MatPaginatorModule,
        MatIconModule,
        MatRadioModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class MatUiComponents{

}
