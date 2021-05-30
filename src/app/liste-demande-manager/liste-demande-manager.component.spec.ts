import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeManagerComponent } from './liste-demande-manager.component';

describe('ListeDemandeManagerComponent', () => {
  let component: ListeDemandeManagerComponent;
  let fixture: ComponentFixture<ListeDemandeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDemandeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
