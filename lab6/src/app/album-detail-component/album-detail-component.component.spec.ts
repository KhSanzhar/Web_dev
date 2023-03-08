import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailComponentComponent } from './album-detail-component.component';

describe('AlbumDetailComponentComponent', () => {
  let component: AlbumDetailComponentComponent;
  let fixture: ComponentFixture<AlbumDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDetailComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
