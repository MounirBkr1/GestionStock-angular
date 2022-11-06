import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCmdClientFournisseurComponent } from './page-cmd-client-fournisseur.component';

describe('PageCmdClientFournisseurComponent', () => {
  let component: PageCmdClientFournisseurComponent;
  let fixture: ComponentFixture<PageCmdClientFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCmdClientFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCmdClientFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
