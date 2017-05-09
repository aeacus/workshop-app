import { Component, OnInit } from '@angular/core';
import { IVideo, fakeVideoData } from '../../api-types';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedVideo: IVideo;

  setSelectedVideo(video: IVideo) {
    console.log('dashboard selecting video' + video.title)
    this.selectedVideo = video;
  }

  constructor() {
    this.selectedVideo = null;
  }

  ngOnInit() {
  }

}
