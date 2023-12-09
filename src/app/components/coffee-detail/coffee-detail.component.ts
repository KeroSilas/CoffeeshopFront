import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CoffeeService } from '../../services/coffee.service';
import { PredefinedCoffeeModel } from '../../models/predefinedCoffee.model';
import {MatIconModule} from "@angular/material/icon";
import {CommentService} from "../../services/comment.service";
import {CommentModel} from "../../models/comment.model";
import {UserStateService} from "../../services/user-state.service";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-coffee-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
  ],
  templateUrl: './coffee-detail.component.html',
  styleUrl: './coffee-detail.component.css',
  providers: [CoffeeService, CommentService],
})
export class CoffeeDetailComponent implements OnInit {
  coffee: PredefinedCoffeeModel = new PredefinedCoffeeModel();
  comments: CommentModel[] = [];
  currentUserId: string = '';

  constructor(
    private router: Router,
    private service: CoffeeService,
    private commentService: CommentService,
    private userState: UserStateService,
  ) {}

  ngOnInit(): void {
    let coffeeId = this.router.url.split('/')[2];
    this.service
      .getCoffeeById(coffeeId)
      .subscribe((data: PredefinedCoffeeModel) => {
        this.coffee = data;
      });
    this.commentService
      .getCommentsByPredefinedCoffeeId(coffeeId)
      .subscribe((data: CommentModel[]) => {
        this.comments = data;
      });
    this.currentUserId = this.userState.getUserId();
  }

  addComment(comment: string) {
    let commentModel = new CommentModel();
    commentModel.id = Guid.create().toString();
    commentModel.content = comment;
    commentModel.predefinedCoffeeId = this.coffee.id;
    commentModel.userId = this.currentUserId;
    commentModel.commentTime = new Date();
    this.commentService.createComment(commentModel).subscribe((data: CommentModel) => {
      this.comments.push(data);
    });
    console.log(commentModel);
    console.log(this.comments);
  }
}
