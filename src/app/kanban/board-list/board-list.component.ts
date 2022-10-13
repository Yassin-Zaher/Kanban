import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Board } from '../board.model';
import { Subscription } from 'rxjs';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit, OnDestroy {


  boards!: Board[];
  sub!: Subscription;
  constructor(public boardService: BoardService) { }


  /* 
   * The subscription is resource that can be destroyed
  */
  ngOnInit(): void {
    this.sub = this.boardService
      .getUserBoards()
      .subscribe(boards => (this.boards = boards))
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  /*
  * When the user drag a board
  */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    /* 
    * We also want to sort our boards in the back end
    */
    this.boardService.sortBoards(this.boards)
  }



}


