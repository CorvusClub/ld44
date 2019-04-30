import { connect } from "react-redux";

import notificationIconImage from "@app/assets/message.png";
import React from "react";
import { unreadCount } from "@app/redux/selectors";
import { RootState } from "@app/redux/reducer";

type NotificiationIconStateProps = Readonly<{
  notificationCount: number;
}>;

const _NotificiationIcon = (props: NotificiationIconStateProps) => {
  if (props.notificationCount === 0) {
    return null;
  }
  return (
    <div className="notificationIcon">
      <img src={notificationIconImage} alt="notifications" />
      <span className="count">{props.notificationCount}</span>
    </div>
  );
};

function mapStateToProps(state: RootState) {
  return {
    notificationCount: unreadCount(state),
  };
}
function mapDispatchToProps() {
  return {};
}

export const NotificiationIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(_NotificiationIcon);
