import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { IVideo } from '../../api-types';

@Component({
  selector: 'video-list-view',
  templateUrl: './video-list.view.component.html',
  styleUrls: ['./video-list.view.component.css']
})
export class VideoListViewComponent implements OnInit {
  @Output() selectVideo = new EventEmitter<IVideo>();
  @Input() videoList : IVideo[];
  @Input() selectedVideo: IVideo;
  
  pageTitle: any;

  constructor(t: Title) { 
      this.pageTitle = t;
      this.selectedVideo = null;
  }
  
  selected_handler(video) {
    console.log('video list view selecting video' + video.title);
    this.pageTitle.setTitle(video.title);
    this.selectVideo.emit(video);
  }

  ngOnInit() {
  }

}

console.log('video-list-view.component.ts has been loaded.');
