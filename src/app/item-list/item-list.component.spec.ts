import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a list of items', () => {
    // check and see if an array gets returned after the api call.
    expect(fixture.getItems()).toBeTruthy();
  });
});