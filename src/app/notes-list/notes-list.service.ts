import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NotesListService {

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get<INote[]>('http://localhost:32771/api/notes');
  }
}

export interface INote {
  id: number;
  title: string;
  details: string;
  rating: number;
  isFavorite: boolean;
}
