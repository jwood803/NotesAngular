import { Component, OnInit } from '@angular/core';
import {INote, NotesListService} from '../notes-list/notes-list.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {
  note = { title: ''};
  id = 0;

  constructor(private route: ActivatedRoute, private notesListService: NotesListService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.notesListService.getNoteById(this.id)
      .subscribe(
        data => this.note = data,
        error => console.log(error)
      );
  }

  deleteNote() {
    this.notesListService.deleteNote(this.id)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }
}
