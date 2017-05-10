import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { VideoListService } from '../../video-list.service';
import { IVideo } from '../../api-types';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Output() selectVideo = new EventEmitter<IVideo>();

  videoList: Observable<IVideo[]>;
  videoListService: VideoListService;
  selectedVideo: IVideo;

  constructor(vs: VideoListService) { 
      this.videoListService = vs;
      this.selectedVideo = null;
      this.videoListService.videos
      .do(videos => this.videoList.emit(videos));
  }
  
  selected_handler(video) {
    console.log('videolist selecting video' + video.title);
    this.selectVideo.emit(video);
  }

  ngOnInit() {
  }

}

console.log('video-list.component.ts has been loaded.');
