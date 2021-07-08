import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeAgentComponent } from './list-demande-agent.component';

describe('ListDemandeAgentComponent', () => {
  let component: ListDemandeAgentComponent;
  let fixture: ComponentFixture<ListDemandeAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandeAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandeAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
