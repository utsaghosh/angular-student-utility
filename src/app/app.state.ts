import { Message } from './models/message';

export interface AppState {
  readonly message: Message[];
}
