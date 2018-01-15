import { CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CanActivateExample implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    // Hinweis: route ist hier vom Type ActivatedRouteSnapshot (SNAPSHOT!)
    const canActivate = route.queryParamMap.has('activate');
    if (canActivate) {
      return true;
    } else {
      // Fester Wert für navigation nicht schön, aber für ein Beispiel ok.
      this.router.navigate(['/routes/route-guard']);
      return false;
    }
  }
}
