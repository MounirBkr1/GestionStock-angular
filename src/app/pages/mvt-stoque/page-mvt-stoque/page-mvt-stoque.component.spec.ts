import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMvtStoqueComponent } from './page-mvt-stoque.component';

describe('PageMvtStoqueComponent', () => {
  let component: PageMvtStoqueComponent;
  let fixture: ComponentFixture<PageMvtStoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMvtStoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMvtStoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
