import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcaoJogoComponent } from './opcao-jogo.component';

describe('OpcaoJogoComponent', () => {
  let component: OpcaoJogoComponent;
  let fixture: ComponentFixture<OpcaoJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcaoJogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcaoJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
