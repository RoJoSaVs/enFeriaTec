import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudclientesComponent } from './solicitudclientes.component';

describe('SolicitudclientesComponent', () => {
  let component: SolicitudclientesComponent;
  let fixture: ComponentFixture<SolicitudclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
