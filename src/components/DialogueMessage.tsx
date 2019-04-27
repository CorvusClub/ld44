import { Message } from "@app/model/story";
import React from "react";
import { portraits } from "@app/assets/portaits";
import Typing from "react-typing-animation";
import { RootState } from "@app/redux/reducer";
import { isTyping } from "@app/redux/selectors";
import { Dispatch } from "redux";
import { actionCreators } from "@app/redux/actions";
import { connect } from "react-redux";

type DialogueMessageOwnProps = Readonly<{
  message: Message;
  showCursor: boolean;
}>;
type DialogueMessageStateProps = Readonly<{
  isTyping: boolean;
}>;
type DialogueMessageDispatchProps = Readonly<{
  startTyping: () => void;
  stopTyping: () => void;
}>;
type DialogueMessageProps = DialogueMessageOwnProps & DialogueMessageStateProps & DialogueMessageDispatchProps;
const _DialogueMessage = (props: DialogueMessageProps) => {
  return (
    <p className={"message " + props.message.speaker}>
      {props.message.speaker !== "narrator" && (
        <img src={portraits[props.message.speaker]} alt={props.message.speaker} className="portrait" />
      )}
      <Typing onStartedTyping={props.startTyping} hideCursor={true}>
        <span className="dialog">{props.message.message}</span>
      </Typing>
      {props.showCursor && <span className="blinkingCursor" />}
    </p>
  );
};

function mapStateToProps(state: RootState): DialogueMessageStateProps {
  return {
    isTyping: isTyping(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch): DialogueMessageDispatchProps {
  return {
    startTyping: () => dispatch(actionCreators.startTyping()),
    stopTyping: () => dispatch(actionCreators.stopTyping()),
  };
}

export const DialogueMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_DialogueMessage);
