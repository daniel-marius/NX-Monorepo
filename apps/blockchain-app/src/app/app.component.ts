import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockchainClientUiComponent } from '@blockchain-app/blockchain/client-ui';

@Component({
  standalone: true,
  imports: [BlockchainClientUiComponent, RouterModule],
  selector: 'blockchain-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blockchain-app';
}
