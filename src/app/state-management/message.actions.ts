import { createAction, props } from '@ngrx/store';
import { Message } from '../models/message';

export const AddMessage = createAction('[Message] Add', props<Message>());
export const DeleteMessage = createAction(
  '[Message] Delete',
  props<{ id: number }>()
);
export const UpdateMessage = createAction(
  '[Message] Update',
  props<{ id: number; payload: string }>()
);
