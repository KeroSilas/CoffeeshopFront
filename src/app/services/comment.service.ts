import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = 'http://localhost:5245/api/comment/';

  constructor(private http: HttpClient) {}

  getCommentsByPredefinedCoffeeId(id: string): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(
      this.baseUrl + 'GetCommentByPredefinedCoffeeId/' + id,
    );
  }

  deleteComment(id: string): Observable<CommentModel> {
    return this.http.delete<CommentModel>(this.baseUrl + id);
  }

  createComment(comment: CommentModel): Observable<CommentModel> {
    return this.http.post<CommentModel>(this.baseUrl, comment);
  }
}
