import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrwsPage } from './borrws-page';

describe('BorrwsPage', () => {
  let component: BorrwsPage;
  let fixture: ComponentFixture<BorrwsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrwsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrwsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
