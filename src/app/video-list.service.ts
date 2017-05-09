import { Injectable } from '@angular/core';

import { IVideo, fakeVideoData } from './api-types';

@Injectable()
export class VideoListService {
  videoList: IVideo[]; 

  videos() {
    return this.videoList;
  }

  constructor() { 
       this.videoList = fakeVideoData;
  }

}
