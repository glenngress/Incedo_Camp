import { TestBed } from '@angular/core/testing';

import { LoginLogoutServiceService } from './login-logout-service.service';

describe('LoginServiceService', () => {
  let service: LoginLogoutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLogoutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
