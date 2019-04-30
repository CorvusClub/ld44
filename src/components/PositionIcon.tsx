import { RootState } from "@app/redux/reducer";
import { connect } from "react-redux";
import React, { useEffect, useRef, useMemo, MouseEvent } from "react";
import { Dispatch } from "redux";
import { actionCreators } from "@app/redux/actions";

type PostitionChoicesOwnProps = Readonly<{
  position: { x: number; y: number };
}>;
type PositionIconStateProps = Readonly<{}>;
type PositionIconDispatchProps = Readonly<{}>;
type PositionIconProps = PostitionChoicesOwnProps & PositionIconStateProps & PositionIconDispatchProps;

const _PositionIcon = (props: PositionIconProps) => {
  const { position } = props;
  return (
    <div
      style={{ transform: `translate(calc(${position.x} * var(--width)), calc(${position.y} * var(--height)))` }}
      id="positionIcon"
    />
  );
};

function mapStateToProps(state: RootState): PositionIconStateProps {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch): PositionIconDispatchProps {
  return {};
}

export const PositionIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PositionIcon);
