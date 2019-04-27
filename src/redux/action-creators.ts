export type Action<T extends string> = {
  // tslint:disable-next-line:no-reserved-keywords
  type: T;
};
export type SuccessAction<T extends string> = Action<T>;
export type ErrorAction<T extends string> = {
  // tslint:disable-next-line:no-reserved-keywords
  type: T;
  error: Error;
};

// tslint:disable-next-line:no-reserved-keywords
export function createAction<T extends string, AC extends () => Action<T>>(type: T): AC;
export function createAction<T extends string, AC extends (...args: any[]) => Action<T>>(
  // tslint:disable-next-line:no-reserved-keywords
  type: T,
  creatorFunction: AC
): AC;
export function createAction<T extends string, AC extends (...args: any[]) => Action<T>>(
  // tslint:disable-next-line:no-reserved-keywords
  type: T,
  creatorFunction?: AC
): AC {
  let decoratedCreator: any = creatorFunction;

  if (!decoratedCreator) {
    decoratedCreator = () => ({ type });
  }

  return decoratedCreator;
}
export function createAsyncAction<
  T extends string,
  CompleteT extends string,
  AC extends (...args: any[]) => Action<T>,
  SAC extends (...args: any[]) => SuccessAction<CompleteT>,
  EAC extends (...args: any[]) => ErrorAction<CompleteT>
>(start: AC, success: SAC, error: EAC) {
  return {
    start,
    success,
    error,
  };
}
export type AsyncActionCreator<
  T extends string,
  C extends string,
  AC extends (...args: any[]) => Action<T>,
  SAC extends (...args: any[]) => SuccessAction<C>,
  EAC extends (...args: any[]) => ErrorAction<C>
> = {
  start: AC;
  success: SAC;
  error: EAC;
};

/**
 * Given an action creator type, which could be either a function that returns an action or an AsyncActionCreator,
 * infer the action it returns.
 */
export type InferActionFromCreator<T> = T extends (...args: any[]) => infer BasicAction
  ? BasicAction
  : T extends AsyncActionCreator<string, string, infer StartAC, infer SuccessAC, infer ErrorAC>
  ? ReturnType<StartAC | SuccessAC | ErrorAC>
  : any;
export function isErrorAction<T extends string>(a: any): a is ErrorAction<T> {
  return !!(a && a.type && a.error);
}
