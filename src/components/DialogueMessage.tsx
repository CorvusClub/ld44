import { Message } from "@app/model/story";
import React, { useEffect } from "react";
import { portraits } from "@app/assets/portaits";
import { RootState } from "@app/redux/reducer";
import { isTyping, currentBeat, dialogueLog } from "@app/redux/selectors";
import { Dispatch } from "redux";
import { actionCreators } from "@app/redux/actions";
import { connect } from "react-redux";
import { Typing } from "./Typing";

type DialogueMessageOwnProps = Readonly<{
  message: Message;
  showCursor: boolean;
}>;
type DialogueMessageStateProps = Readonly<{
  isTyping: boolean;
  isCurrent: boolean;
  isChoiceText: boolean;
}>;
type DialogueMessageDispatchProps = Readonly<{
  startTyping: () => void;
  stopTyping: () => void;
}>;
type DialogueMessageProps = DialogueMessageOwnProps & DialogueMessageStateProps & DialogueMessageDispatchProps;
const _DialogueMessage = (props: DialogueMessageProps) => {
  if (props.isChoiceText) {
    return null;
  }
  useEffect(() => {
    props.startTyping();
  }, []);
  return (
    <div className={`message ${props.message.speaker} ${props.message.isNarration && "narrator"}`}>
      <div className="portraitContainer">
        <img src={portraits[props.message.speaker]} alt={props.message.speaker} className="portrait" />
      </div>
      <div className="dialog">
        {props.isCurrent ? (
          <Typing skip={!props.isTyping} timePerCharacter={42} onDoneTyping={props.stopTyping}>
            {props.message.message}
          </Typing>
        ) : (
          <span>{props.message.message}</span>
        )}
      </div>
      {props.showCursor && !props.isTyping && <span className="blinkingCursor" />}
    </div>
  );
};

function mapStateToProps(state: RootState, props: DialogueMessageOwnProps): DialogueMessageStateProps {
  const log = dialogueLog(state);
  const myPos = log.indexOf(props.message);
  const nextPos = myPos + 1;
  return {
    isTyping: isTyping(state),
    isCurrent: currentBeat(state) === props.message,
    isChoiceText: log[nextPos] && log[nextPos].beatType === "choices",
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
