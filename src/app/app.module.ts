import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import {NotesListService} from './notes-list/notes-list.service';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {appRoutes} from './app.routes';
import { DeleteNoteComponent } from './delete-note/delete-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    AddNoteComponent,
    DeleteNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [NotesListService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteNoteComponent]
})
export class AppModule { }
