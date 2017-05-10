import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

//import { VideoListLoaderService } from './video-list-loader-service';

import { IVideo } from './api-types';

const API_URL = "/assets";

@Injectable()
export class VideoListService {

  videosNew: Observable<IVideo[]>; // type this as an IVideo?

  constructor(private http: Http) { 
    //this.videoList = fakeVideoData;
      
    const videoObs = this.http.get(API_URL + '/videos.json');

    this.videosNew = videoObs
      .do(res => console.log(res))
      .map(res => res.json());
  }

}
