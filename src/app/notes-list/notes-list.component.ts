import { Component, OnInit } from '@angular/core';
import {NotesListService} from './notes-list.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteNoteComponent} from '../delete-note/delete-note.component';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes = [];

  constructor(private notesListService: NotesListService, private modalService: NgbModal) {}

  ngOnInit() {
    this.notesListService.getNotes()
      .subscribe(
        (data) => this.notes = data,
        (error) => console.log(error)
      );
  }

}
