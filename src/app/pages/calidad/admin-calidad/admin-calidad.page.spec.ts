import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminCalidadPage } from './admin-calidad.page';

describe('AdminCalidadPage', () => {
  let component: AdminCalidadPage;
  let fixture: ComponentFixture<AdminCalidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCalidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCalidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
