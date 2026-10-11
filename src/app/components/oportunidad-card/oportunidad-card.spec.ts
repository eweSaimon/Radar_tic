import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OportunidadCard } from './oportunidad-card';

describe('OportunidadCard', () => {
  let component: OportunidadCard;
  let fixture: ComponentFixture<OportunidadCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OportunidadCard],
    }).compileComponents();

    fixture = TestBed.createComponent(OportunidadCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
