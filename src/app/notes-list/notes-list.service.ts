import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NotesListService {
  baseUrl = 'http://localhost:32771/api/notes';

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get<INote[]>(this.baseUrl);
  }

  getNoteById(id) {
    return this.http.get<INote>(`${this.baseUrl}/${id}`);
  }

  addNote(note) {
    return this.http.post(this.baseUrl, note);
  }

  updateNote(note) {
    return this.http.put(this.baseUrl, note);
  }

  deleteNote(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

export interface INote {
  id: number;
  title: string;
  details: string;
  rating: number;
  isFavorite: boolean;
}
