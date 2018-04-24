import { Routes } from '@angular/router';
import {NotesListComponent} from './notes-list/notes-list.component';
import {DeleteNoteComponent} from './delete-note/delete-note.component';

export const appRoutes: Routes = [
  {path: '', component: NotesListComponent},
  {path: 'delete/:id', component: DeleteNoteComponent}
];
