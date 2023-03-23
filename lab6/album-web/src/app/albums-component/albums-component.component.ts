import {Component} from '@angular/core';

import {Album} from "../albums";
import {AlbumsService} from "./albums.service";

@Component({
  selector: 'app-albums-component',
  templateUrl: './albums-component.component.html',
  styleUrls: ['./albums-component.component.css']
})
export class AlbumsComponentComponent {
  albums: Album[];
  searchTerm = '';

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
  }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(
      (response) => {
        this.albums = response.slice(0, 15);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteAlbum(album: Album): void {
    const index = this.albums.indexOf(album);
    if (index !== -1) {
      this.albums.splice(index, 1);
    }
  }

  search(value: string): void {
    this.albums = this.albums.filter((val) =>
      val.title.toLowerCase().includes(value)
    );
  }
}
