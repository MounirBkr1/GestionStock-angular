import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtStockArticleComponent } from './detail-mvt-stock-article.component';

describe('DetailMvtStockArticleComponent', () => {
  let component: DetailMvtStockArticleComponent;
  let fixture: ComponentFixture<DetailMvtStockArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMvtStockArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMvtStockArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
