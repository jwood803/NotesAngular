import { Component, OnInit } from '@angular/core';
import {NotesListService} from './notes-list.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes = [];

  constructor(private notesListService: NotesListService) {}

  ngOnInit() {
    this.notesListService.getNotes()
      .subscribe(
        (data) => this.notes = data,
        (error) => console.log(error)
      );
  }

}
