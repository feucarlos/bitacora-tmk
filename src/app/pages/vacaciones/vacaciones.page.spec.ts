import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VacacionesPage } from './vacaciones.page';

describe('VacacionesPage', () => {
  let component: VacacionesPage;
  let fixture: ComponentFixture<VacacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VacacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
