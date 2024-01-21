import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockchainClientUiComponent } from './blockchain-client-ui.component';

describe('BlockchainClientUiComponent', (): void => {
  let component: BlockchainClientUiComponent;
  let fixture: ComponentFixture<BlockchainClientUiComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [BlockchainClientUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockchainClientUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
