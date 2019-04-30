import { RootState } from "@app/redux/reducer";
import { connect } from "react-redux";
import React, { useEffect, useRef, useMemo, MouseEvent } from "react";
import { Dispatch } from "redux";
import { actionCreators } from "@app/redux/actions";
import { NotificiationIcon } from "./NotificationIcon";
import { PositionIcon } from "./PositionIcon";
import { currentLocation, knownLocations } from "@app/redux/selectors";
import { Locations } from "@app/story/locations";
import { LocationIcon } from "./LocationIcon";

type MapSectionStateProps = Readonly<{
  currentLocation: string;
  knownLocations: string[];
}>;
type MapSectionDispatchProps = Readonly<{}>;
type MapSectionProps = MapSectionStateProps & MapSectionDispatchProps;

const KnownLocations = (props: { locations: string[] }) => {
  const locationObjects = props.locations.map((loc) => Locations[loc]);
  const uniques = locationObjects.filter((item, index) => locationObjects.indexOf(item) === index);

  return (
    <>
      {uniques.map((loc) => (
        <LocationIcon key={loc.name} location={loc} />
      ))}
    </>
  );
};

const _MapSection = (props: MapSectionProps) => {
  return (
    <div id="mapSection">
      <div id="mapImage" />
      <KnownLocations locations={props.knownLocations} />
      <NotificiationIcon />
      <PositionIcon position={Locations[props.currentLocation] || Locations.intro} />
    </div>
  );
};

function mapStateToProps(state: RootState): MapSectionStateProps {
  return {
    currentLocation: currentLocation(state),
    knownLocations: knownLocations(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch): MapSectionDispatchProps {
  return {};
}

export const MapSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MapSection);
