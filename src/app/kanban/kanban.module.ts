import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { BoardListComponent } from './board-list/board-list.component';
import { DialogComponent } from './dialog/dialog.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    BoardListComponent,
    DialogComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule,
    FormsModule,
    DragDropModule,
    MatDialogModule

  ]
})
export class KanbanModule { }
