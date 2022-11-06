import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdClientFournisseurComponent } from './detail-cmd-client-fournisseur.component';

describe('DetailCmdClientFournisseurComponent', () => {
  let component: DetailCmdClientFournisseurComponent;
  let fixture: ComponentFixture<DetailCmdClientFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCmdClientFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCmdClientFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
