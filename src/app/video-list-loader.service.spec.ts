import { TestBed, inject } from '@angular/core/testing';

import { VideoListLoaderService } from './video-list-loader.service';

describe('VideoListLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoListLoaderService]
    });
  });

  it('should ...', inject([VideoListLoaderService], (service: VideoListLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
