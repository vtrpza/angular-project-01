import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SnackService } from '../services/snack.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private snack: SnackService) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const user = await this.afAuth.currentUser;
    const userOnLoad = await new Promise((resolve: any, reject: any) =>
    this.afAuth.onAuthStateChanged((user: any) =>
      resolve(user), (e: any) => reject(e)))
    const isLoggedIn = !!user ? !!user : !!userOnLoad;
    if (!isLoggedIn) {
      this.snack.authError();
    }
    return isLoggedIn;
  }
}
