import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalidadPage } from './calidad.page';

describe('CalidadPage', () => {
  let component: CalidadPage;
  let fixture: ComponentFixture<CalidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
