import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';

interface AppState {
  count: number;
  messages: string[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App extends ComponentStore<AppState> {
  protected readonly title = signal('chat-room');

  constructor() {
    super({ count: 0, messages: [] });
  }

  // Selectors
  readonly count$ = this.select((state) => state.count);
  readonly messages$ = this.select((state) => state.messages);

  // Actions
  readonly increment = this.updater((state) => ({
    ...state,
    count: state.count + 1,
  }));

  readonly addMessage = this.updater((state, message: string) => ({
    ...state,
    messages: [...state.messages, message],
  }));

  // Helper method for adding timestamped messages
  addTimestampedMessage(): void {
    const timestamp = new Date().toLocaleTimeString();
    this.addMessage(`New message ${timestamp}`);
  }
}
