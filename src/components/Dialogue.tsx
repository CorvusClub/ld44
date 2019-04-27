import { RootState } from "@app/redux/reducer";
import { connect } from "react-redux";
import React, { useEffect, useRef } from "react";
import { Dispatch } from "redux";
import { actionCreators } from "@app/redux/actions";
import { dialogueLog, shouldBeAdvancable } from "@app/redux/selectors";
import { DialogueChoices } from "./DialogueChoices";
import { StoryBeat } from "@app/model/story";
import { DialogueMessage } from "./DialogueMessage";

type DialogueStateProps = Readonly<{
  log: StoryBeat[];
  shouldBeAdvancable: boolean;
}>;
type DialogueDispatchProps = Readonly<{
  continueStory: () => void;
}>;
type DialogueProps = DialogueStateProps & DialogueDispatchProps;

const _Dialogue = (props: DialogueProps) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = container.current.scrollHeight;
    }
  }, [props.log]);
  return (
    <div className="dialogueContainer" ref={container} onClick={props.continueStory} role="button">
      {props.log.map((beat, index) => {
        switch (beat.beatType) {
          case "message": {
            return (
              <DialogueMessage message={beat} showCursor={props.shouldBeAdvancable && index === props.log.length - 1} />
            );
          }
          case "choices": {
            return <DialogueChoices choices={beat.choices} />;
          }
        }
      })}
    </div>
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
