'use client';
import { useFormState, useFormStatus } from 'react-dom';

import { createTaskCustom } from '@/utils/actions';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='btn btn-primary join-item'
      disabled={pending}
    >
      {pending ? 'please wait...' : 'create task'}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  return (
    <form action={formAction}>
      {state.message ? <p className='mb-2'>{state.message}</p> : null}
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskForm;
