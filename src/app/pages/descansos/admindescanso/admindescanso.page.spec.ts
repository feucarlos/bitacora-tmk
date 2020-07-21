import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmindescansoPage } from './admindescanso.page';

describe('AdmindescansoPage', () => {
  let component: AdmindescansoPage;
  let fixture: ComponentFixture<AdmindescansoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindescansoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmindescansoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
