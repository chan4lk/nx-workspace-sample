import { async, TestBed } from '@angular/core/testing';
import { BtComponentsModule } from './bt-components.module';

describe('BtComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BtComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BtComponentsModule).toBeDefined();
  });
});
