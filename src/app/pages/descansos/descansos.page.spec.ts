import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescansosPage } from './descansos.page';

describe('DescansosPage', () => {
  let component: DescansosPage;
  let fixture: ComponentFixture<DescansosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescansosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescansosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
