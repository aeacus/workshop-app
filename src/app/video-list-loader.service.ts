import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const API_URL = "http://localhost:8085";

@Injectable()
export class VideoListLoaderService {
  constructor(private http: Http) { }

  load() {
    return this.http.get(API_URL + '/video');
  }

}
