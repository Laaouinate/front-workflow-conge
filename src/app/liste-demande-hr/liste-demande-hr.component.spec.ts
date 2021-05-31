import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeHrComponent } from './liste-demande-hr.component';

describe('ListeDemandeHrComponent', () => {
  let component: ListeDemandeHrComponent;
  let fixture: ComponentFixture<ListeDemandeHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDemandeHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandeHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
