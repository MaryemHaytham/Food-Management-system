/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserFavoritesService } from './userFavorites.service';

describe('Service: UserFavorites', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFavoritesService]
    });
  });

  it('should ...', inject([UserFavoritesService], (service: UserFavoritesService) => {
    expect(service).toBeTruthy();
  }));
});
