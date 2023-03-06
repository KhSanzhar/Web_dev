import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosComponentComponent } from './album-photos-component.component';

describe('AlbumPhotosComponentComponent', () => {
  let component: AlbumPhotosComponentComponent;
  let fixture: ComponentFixture<AlbumPhotosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPhotosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhotosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
