import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true, // Komponent standalone
  imports: [
    RouterModule,       // Dodaj RouterModule, aby obsłużyć router-outlet
    MatToolbarModule,   // Toolbar Angular Material
    MatButtonModule     // Przyciski Angular Material
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-plants';
}
