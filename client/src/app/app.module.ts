import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { MatUiComponents } from './constants/mat-ui-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent, UserDetailsDialogComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { UserService } from './services/user.service';
import { QuestionService } from './services/question.service';
// import { UserDetailsDialogComponent } from './user-details-dialog/user-details-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    UserDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatUiComponents,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService,
    QuestionService
  ],
  entryComponents:[UserDetailsDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
