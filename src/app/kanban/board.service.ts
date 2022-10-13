import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs';
import { Board } from './board.model';


/* 
 * This service was created to seperate our concerns
*/
@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }


  /* 
   * Create New Board For The Current User
  */

  async createBoard(data: Board) {
    const user = await this.afAuth.currentUser;

    return this.db.collection('board').add({
      ...data,
      uid: user?.uid,
      tasks: [{ description: "Hello", label: "yellow" }]
    })
  }



  /* 
 * Delete A Board For The Current User
*/

  deleteBoard(boardId: string) {
    return this.db
      .collection('board')
      .doc(boardId)
      .delete();
  }


  updateTask(boardId: string, task: Task[]) {
    return this.db
      .collection('Task')
      .doc(boardId)
      .update({ task })
  }


  removeTask(boardId: string, task: Task) {
    return this.db
      .collection('board')
      .doc(boardId)
      .update({
        tasks: firebase.firestore.FieldValue.arrayRemove(task)
      });
  }


  getUserBoards() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<Board>('board', ref =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )

            .valueChanges({ idField: 'id' })
        } else {
          return []
        }
      })
    )
  }


  sortBoards(boards: Board[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(board => db.collection('board').doc(board.id));
    refs.forEach((ref, index) => batch.update(ref, { priority: index }))
    batch.commit()
  }



}

