import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarItemPage } from './editar-item.page';

describe('EditarItemPage', () => {
  let component: EditarItemPage;
  let fixture: ComponentFixture<EditarItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
