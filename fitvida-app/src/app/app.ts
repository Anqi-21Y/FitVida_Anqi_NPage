import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. Import custom components
import { HeroCard } from './hero-card/hero-card';

// 2. Import Angular Material modul
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  // 3. Activate these modules in the imports array.
  imports: [
    CommonModule,
    HeroCard,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('fitvida-app');
}
