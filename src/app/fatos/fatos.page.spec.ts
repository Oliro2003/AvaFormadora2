import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FatosPage } from './fatos.page';

describe('FatosPage', () => {
  let component: FatosPage;
  let fixture: ComponentFixture<FatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
