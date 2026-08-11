import { useSyncExternalStore } from "react";

type Action = {
  type: string;
};

type Reducer<State, ActionType extends Action> = (
  state: State | undefined,
  action: ActionType
) => State;

type Listener = () => void;

type Store<State, ActionType extends Action> = {
  getState: () => State;
  dispatch: (action: ActionType) => void;
  subscribe: (listener: Listener) => () => void;
};

type Dispatch<ActionType extends Action> = (action: ActionType) => void;

type Middleware<State, ActionType extends Action> = (api: {
  getState: () => State;
  dispatch: Dispatch<ActionType>;
}) => (next: Dispatch<ActionType>) => Dispatch<ActionType>;

function createStore<State, ActionType extends Action>(
  reducer: Reducer<State, ActionType>,
  initialState: State
): Store<State, ActionType> {
  let state = initialState;
  let listeners: Listener[] = [];

  function getState() {
    return state;
  }

  function dispatch(action: ActionType) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener: Listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((item) => item !== listener);
    };
  }

  return { getState, dispatch, subscribe };
}

function combineReducers<State extends Record<string, unknown>, ActionType extends Action>(
  reducers: {
    [Key in keyof State]: Reducer<State[Key], ActionType>;
  }
) {
  return (state = {} as State, action: ActionType) => {
    const newState = {} as State;

    for (const key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }

    return newState;
  };
}

function compose<ActionType extends Action>(
  ...funcs: Array<(next: Dispatch<ActionType>) => Dispatch<ActionType>>
) {
  if (funcs.length === 0) {
    return (arg: Dispatch<ActionType>) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (next) => a(b(next)));
}

function applyMiddleware<State, ActionType extends Action>(
  ...middlewares: Middleware<State, ActionType>[]
): (
  createStore: (
    reducer: Reducer<State, ActionType>,
    initialState: State
  ) => Store<State, ActionType>
) => (
  reducer: Reducer<State, ActionType>,
  initialState: State
) => Store<State, ActionType> {
  return (createStore) => (reducer, initialState) => {
    const store = createStore(reducer, initialState);
    let dispatch: Dispatch<ActionType> = store.dispatch;

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action: ActionType) => dispatch(action),
    };

    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
}

type CounterState = {
  count: number;
};

type AppState = {
  counter: CounterState;
};

type CounterAction = {
  type: "INCREMENT" | "DECREMENT";
};

const initialState: CounterState = { count: 0 };
const initialRootState: AppState = { counter: initialState };

const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers<AppState, CounterAction>({
  counter: counterReducer,
});

const loggerMiddleware: Middleware<AppState, CounterAction> =
  ({ getState }) =>
  (next) =>
  (action) => {
    console.log("will dispatch", action);
    next(action);
    console.log("state after dispatch", getState());
  };

const createStoreWithMiddleware =
  applyMiddleware<AppState, CounterAction>(loggerMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer, initialRootState);

function useReduxStore<State, ActionType extends Action>(
  store: Store<State, ActionType>
) {
  return useSyncExternalStore(store.subscribe, store.getState, store.getState);
}

export function ReduxReactDemo() {
  const state = useReduxStore(store);

  return (
    <div>
      <p>Count: {state.counter.count}</p>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
}
