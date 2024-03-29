import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordInfoComponent } from './word-info.component';

describe('WordInfoComponent', () => {
  let component: WordInfoComponent;
  let fixture: ComponentFixture<WordInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
