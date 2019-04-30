import React, { MouseEvent } from "react";
import moize from "moize";
import { RootState } from "@app/redux/reducer";
import { currentBeat, dialogueLog } from "@app/redux/selectors";
import { Dispatch } from "redux";
import { actionCreators } from "@app/redux/actions";
import { connect } from "react-redux";
import { Choice, Message, Choices } from "@app/model/story";
import { portraits } from "@app/assets/portaits";

type ChoiceProps = Readonly<{
  text: string;
  choose: () => void;
  disabled: boolean;
}>;
const ChoiceButton = (props: ChoiceProps) => {
  const choose = (event: MouseEvent<HTMLButtonElement>) => {
    props.choose();
    event.stopPropagation();
  };
  return (
    <button onClick={choose} disabled={props.disabled}>
      {props.text}
    </button>
  );
};

type DialogueChoicesOwnProps = Readonly<{
  choices: Choices;
}>;
type DialogueChoicesStateProps = Readonly<{
  isCurrent: boolean;
  previousMessage: Message;
}>;
type DialogueChoicesDispatchProps = Readonly<{
  chooseChoice: (index: number) => void;
}>;
type DialogueChoicesProps = DialogueChoicesOwnProps & DialogueChoicesStateProps & DialogueChoicesDispatchProps;

const buildChoiceCallback = moize((index: number, chooseChoice: (index: number) => void) => () => chooseChoice(index));

const _DialogueChoices = (props: DialogueChoicesProps) => {
  if (props.choices.choices.length === 0) {
    return null;
  }
  return (
    <div className={`message ${props.previousMessage.speaker} ${props.previousMessage.isNarration && "narrator"}`}>
      <div className="portraitContainer">
        <img src={portraits[props.previousMessage.speaker]} alt={props.previousMessage.speaker} className="portrait" />
      </div>
      <div className="dialog">
        <span>{props.previousMessage.message}</span>
        <ul className="choices">
          {props.choices.choices.map((choice) => (
            <ChoiceButton
              key={choice.index}
              text={choice.text}
              disabled={!props.isCurrent}
              choose={buildChoiceCallback(choice.index, props.chooseChoice)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

function mapStateToProps(state: RootState, ownProps: DialogueChoicesOwnProps): DialogueChoicesStateProps {
  const current = currentBeat(state);
  const log = dialogueLog(state);
  const myPos = log.indexOf(ownProps.choices);
  const prevPos = myPos - 1;
  return {
    isCurrent: current !== undefined && current.beatType === "choices" && current === ownProps.choices,
    previousMessage: log[prevPos] as Message,
  };
}

function mapDispatchToProps(dispatch: Dispatch): DialogueChoicesDispatchProps {
  return {
    chooseChoice: (index: number) => dispatch(actionCreators.choose(index)),
  };
}

export const DialogueChoices = connect(
  mapStateToProps,
  mapDispatchToProps
)(_DialogueChoices);
