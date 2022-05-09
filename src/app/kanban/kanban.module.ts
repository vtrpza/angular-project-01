import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';
import { BoardDialogComponent } from './dialogs/board-dialog.component';
import { TaskDialogComponent } from './dialogs/task-dialog.component';

@NgModule({
  declarations: [
    BoardListComponent,
    BoardComponent,
    BoardDialogComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    KanbanRoutingModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatButtonToggleModule,
  ],
  entryComponents: []
})
export class KanbanModule {}
