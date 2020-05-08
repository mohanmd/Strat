import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditpopupPage } from './editpopup.page';

describe('EditpopupPage', () => {
  let component: EditpopupPage;
  let fixture: ComponentFixture<EditpopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
