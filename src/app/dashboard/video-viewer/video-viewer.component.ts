import { Component, Input, OnInit } from '@angular/core';
import { IVideo } from '../../api-types';

@Component({
  selector: 'video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.css']
})
export class VideoViewerComponent implements OnInit {

  @Input() currentVideo: IVideo
  
  constructor() { }

  ngOnInit() {
  }

}
