import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaltasPage } from './faltas.page';

describe('FaltasPage', () => {
  let component: FaltasPage;
  let fixture: ComponentFixture<FaltasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaltasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaltasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
