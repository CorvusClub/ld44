import { RootState, StoryBeat } from "@app/redux/reducer";
import { connect } from "react-redux";
import React from "react";
import { Dispatch } from "redux";
import { actionCreators } from "@app/redux/actions";
import { dialogueLog, shouldBeAdvancable } from "@app/redux/selectors";
import { DialogueChoices } from "./DialogueChoices";

type DialogueStateProps = Readonly<{
  log: StoryBeat[];
  shouldBeAdvancable: boolean;
}>;
type DialogueDispatchProps = Readonly<{
  continueStory: () => void;
}>;
type DialogueProps = DialogueStateProps & DialogueDispatchProps;

const _Dialogue = (props: DialogueProps) => {
  return (
    <>
      {props.log.map((message) => (
        <p key={message.message}>{message.message}</p>
      ))}
      <DialogueChoices />
      {props.shouldBeAdvancable && <button onClick={props.continueStory}>Continue story</button>}
    </>
  );
};

function mapStateToProps(state: RootState): DialogueStateProps {
  return {
    log: dialogueLog(state),
    shouldBeAdvancable: shouldBeAdvancable(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch): DialogueDispatchProps {
  return {
    continueStory: () => dispatch(actionCreators.proceedInStory()),
  };
}

export const Dialogue = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Dialogue);
