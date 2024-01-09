import { TestBed } from '@angular/core/testing';

import { StringUtilsService } from './string-utils.service';

describe('StringUtilsService', () => {
  let service: StringUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    let title = StringUtilsService.snakeCaseToTitle("hello_world");
    expect(title).toEqual("Hello World");
  });
});
