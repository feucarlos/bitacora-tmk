import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncapacidadesPage } from './incapacidades.page';

describe('IncapacidadesPage', () => {
  let component: IncapacidadesPage;
  let fixture: ComponentFixture<IncapacidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncapacidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncapacidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
