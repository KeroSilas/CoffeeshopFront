import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CoffeeService } from '../../services/coffee.service';
import { PredefinedCoffeeModel } from '../../models/predefinedCoffee.model';
import { MatIconModule } from '@angular/material/icon';
import { CommentService } from '../../services/comment.service';
import { CommentModel } from '../../models/comment.model';
import { UserStateService } from '../../services/local/user-state.service';
import { Guid } from 'guid-typescript';
import { NgArrayPipesModule } from 'ngx-pipes';
import { OrderDetailsModel } from '../../models/orderDetails.model';
import { ShoppingCartService } from '../../services/local/shopping-cart.service';

@Component({
  selector: 'app-coffee-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    NgArrayPipesModule,
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
    private shoppingCartService: ShoppingCartService,
  ) {}

  ngOnInit(): void {
    if (!this.userState.isLoggedIn()) {
      this.router.navigate(['login']).then((r) => console.log(r));
    }
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

  handleAddToCart(coffee: PredefinedCoffeeModel) {
    let orderDetail = new OrderDetailsModel();
    orderDetail.id = Guid.create().toString();
    orderDetail.predefinedCoffeeId = coffee.id;
    this.shoppingCartService.addItemToOrder(orderDetail);
  }

  addComment(comment: string) {
    let commentModel = new CommentModel();
    commentModel.id = Guid.create().toString();
    commentModel.content = comment;
    commentModel.predefinedCoffeeId = this.coffee.id;
    commentModel.userId = this.currentUserId;
    commentModel.commentTime = new Date();
    this.commentService
      .createComment(commentModel)
      .subscribe((data: CommentModel) => {
        this.comments.push(data);
      });
  }

  deleteComment(commentId: string) {
    this.commentService
      .deleteComment(commentId)
      .subscribe((data: CommentModel) => {
        this.comments = this.comments.filter(
          (comment) => comment.id !== commentId,
        );
      });
  }
}
