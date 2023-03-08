import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Album} from "../albums";
import {AlbumsService} from "../albums-component/albums.service";

@Component({
  selector: 'app-album-detail-component',
  templateUrl: './album-detail-component.component.html',
  styleUrls: ['./album-detail-component.component.css']
})
export class AlbumDetailComponentComponent {

  album: Album;
  newTitle: string;

  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.album = {} as Album;
    this.newTitle = "";
  }

  goBack(){
    window.location.href = "http://localhost:4200/albums";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        let _id = params.get('id');
        if (_id) {
          let id = +_id;
          this.albumService.getAlbum(id).subscribe(
            (response) => {
              this.album = response;
            }
          )
        }
      }
    );
  }

  saveTitle() {
    this.albumService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(
      (response) => {
        this.album.title = response.title;
        this.newTitle = "";
      }
    )
  }
}
