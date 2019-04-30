import { RootState } from "@app/redux/reducer";
import { connect } from "react-redux";
import React, { useEffect, useRef, useMemo, MouseEvent } from "react";
import { Dispatch } from "redux";

type PostitionChoicesOwnProps = Readonly<{
  location: { x: number; y: number; name: string };
}>;
type LocationIconStateProps = Readonly<{}>;
type LocationIconDispatchProps = Readonly<{}>;
type LocationIconProps = PostitionChoicesOwnProps & LocationIconStateProps & LocationIconDispatchProps;

const _LocationIcon = (props: LocationIconProps) => {
  const { location } = props;
  return (
    <div
      style={{ transform: `translate(calc(${location.x} * var(--width)), calc(${location.y} * var(--height)))` }}
      className="locationIcon">
      <span className="locName">{location.name}</span>
    </div>
  );
};

function mapStateToProps(state: RootState): LocationIconStateProps {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch): LocationIconDispatchProps {
  return {};
}

export const LocationIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LocationIcon);
