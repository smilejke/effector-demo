import {
  Store,
  Event,
  sample,
  createStore,
  createEvent,
  forward,
} from "effector-root";
import { nanoid } from "nanoid";

export interface ModalState<P> {
  state: boolean;
  payload: P | null;
}

interface createModalReturn<P> {
  open: Event<P>;
  close: Event<void>;
  opened: Event<any>;
  closed: Event<void>;
  visible: Store<boolean>;
  state: Store<ModalState<P>>;
}

export const createModal = <P = void>(name?: string): createModalReturn<P> => {
  const modalName = name || nanoid().slice(0, 5);

  const open = createEvent<P>(`${modalName}-open`);
  const close = createEvent(`${modalName}-close`);

  const opened = createEvent<any>(`${modalName}-opened`);
  const closed = createEvent(`${modalName}-closed`);

  const state = createStore<ModalState<P>>(
    {
      state: false,
      payload: null,
    },
    { name: `${modalName}-modal` }
  );

  const visible = state.map((value) => value.state);

  state
    .on(open, (_, value) => {
      return {
        state: true,
        payload: value,
      };
    })
    .reset(close);

  sample({
    source: state,
    clock: open,
    fn: (modal) => modal.payload,
    target: opened,
  });

  forward({
    from: close,
    to: closed,
  });

  return {
    open,
    close,
    opened,
    closed,
    visible,
    state,
  };
};
