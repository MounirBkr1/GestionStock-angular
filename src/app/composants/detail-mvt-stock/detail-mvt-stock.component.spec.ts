import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtStockComponent } from './detail-mvt-stock.component';

describe('DetailMvtStockComponent', () => {
  let component: DetailMvtStockComponent;
  let fixture: ComponentFixture<DetailMvtStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMvtStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMvtStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
