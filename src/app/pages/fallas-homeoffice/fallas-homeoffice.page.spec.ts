import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FallasHomeofficePage } from './fallas-homeoffice.page';

describe('FallasHomeofficePage', () => {
  let component: FallasHomeofficePage;
  let fixture: ComponentFixture<FallasHomeofficePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallasHomeofficePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FallasHomeofficePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
