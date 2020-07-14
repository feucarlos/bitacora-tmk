import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirmaDesfirmaPage } from './firma-desfirma.page';

describe('FirmaDesfirmaPage', () => {
  let component: FirmaDesfirmaPage;
  let fixture: ComponentFixture<FirmaDesfirmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmaDesfirmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirmaDesfirmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
