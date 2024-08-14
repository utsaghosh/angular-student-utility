import { createReducer, on } from '@ngrx/store';
import { Message } from '../models/message';
import { AddMessage, DeleteMessage, UpdateMessage } from './message.actions';

export const initialState: Message[] = [];

export const MessageReducer = createReducer(
  initialState,
  on(AddMessage, (state, { id, sender, data }) => [
    ...state,
    { id, sender, data },
  ]),
  on(DeleteMessage, (state, { id }) =>
    state.filter((message) => message.id !== id)
  ),
  on(UpdateMessage, (state, { id, payload }) => {
    const index = state.findIndex((message) => message.id === id);
    let message: Message = state[index];
    message.data = payload;
    let newState = [...state];
    return newState.splice(index, 1, message);
  })
);
