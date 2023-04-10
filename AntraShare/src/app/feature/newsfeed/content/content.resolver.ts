import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { Story } from '../interface/story';
import { NewsfeedServiceService } from '../newsfeed_service/newsfeed-service.service';

@Injectable({
  providedIn: 'root',
})
export class ContentResolver implements Resolve<Story> {
  constructor(
    private router: Router,
    private newsfeedService: NewsfeedServiceService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Story> {
    return this.newsfeedService.getNewById(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['/newsfeed']);
        return EMPTY;
      })
    );
  }
}
