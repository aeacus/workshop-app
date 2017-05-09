import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { VideoListService } from '../../video-list.service';

import { IVideo } from '../../api-types';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Output() selectVideo = new EventEmitter<IVideo>()

  videoListService: VideoListService;
  selectedVideo: IVideo;
  pageTitle: any;

  constructor(t: Title, vs: VideoListService) { 
      this.pageTitle = t;
      this.videoListService = vs;
      this.selectedVideo = null;
  }
  
  selected_handler(video) {
    console.log('videolist selecting video' + video.title)
    this.pageTitle.setTitle(video.title);
    this.selectVideo.emit(video);
    if (this.selectedVideo == video) {
      this.selectedVideo = null;
    }   else  {
      this.selectedVideo = video;
    }
  }

  ngOnInit() {
  }

}

console.log('video-list.component.ts has been loaded.');
