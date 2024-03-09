/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserRecipeService } from './userRecipe.service';

describe('Service: UserRecipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRecipeService]
    });
  });

  it('should ...', inject([UserRecipeService], (service: UserRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
