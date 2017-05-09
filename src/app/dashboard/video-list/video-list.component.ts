import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { IVideo, fakeVideoData } from '../../api-types';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Output() selectVideo = new EventEmitter<IVideo>()

  videoList: IVideo[];
  selectedVideo: IVideo;

  
  selected_handler(video) {
    console.log('videolist selecting video' + video.title)
    this.selectVideo.emit(video);
    if (this.selectedVideo == video) {
      this.selectedVideo = null;
    }   else  {
      this.selectedVideo = video;
    }
  }
  constructor() { 
      this.videoList = fakeVideoData;
      this.selectedVideo = null;
  }

  ngOnInit() {
  }

}

console.log('video-list.component.ts has been loaded.');
