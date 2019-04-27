import { RootState } from "@app/redux/reducer";
import { connect } from "react-redux";
import React from "react";
import { counterValue } from "@app/redux/selectors";
import { Dispatch } from "redux";
import { actionCreators } from "@app/redux/actions";

type CounterStateProps = Readonly<{
  count: number;
}>;
type CounterDispatchProps = Readonly<{
  increment: () => void;
}>;
type CounterProps = CounterStateProps & CounterDispatchProps;

const _Counter = (props: CounterProps) => {
  return <button onClick={props.increment}>{props.count}</button>;
};

function mapStateToProps(state: RootState): CounterStateProps {
  return {
    count: counterValue(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch): CounterDispatchProps {
  return {
    increment: () => dispatch(actionCreators.incrementCounter()),
  };
}

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Counter);
