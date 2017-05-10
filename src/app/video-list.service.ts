import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

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
