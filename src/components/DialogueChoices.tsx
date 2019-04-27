import React, { MouseEvent } from "react";
import moize from "moize";
import { RootState } from "@app/redux/reducer";
import { currentBeat } from "@app/redux/selectors";
import { Dispatch } from "redux";
import { actionCreators } from "@app/redux/actions";
import { connect } from "react-redux";
import { Choice } from "@app/model/story";

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
  choices: Choice[];
}>;
type DialogueChoicesStateProps = Readonly<{
  isCurrent: boolean;
}>;
type DialogueChoicesDispatchProps = Readonly<{
  chooseChoice: (index: number) => void;
}>;
type DialogueChoicesProps = DialogueChoicesOwnProps & DialogueChoicesStateProps & DialogueChoicesDispatchProps;

const buildChoiceCallback = moize((index: number, chooseChoice: (index: number) => void) => () => chooseChoice(index));

const _DialogueChoices = (props: DialogueChoicesProps) => {
  if (props.choices.length === 0) {
    return null;
  }
  return (
    <ul>
      {props.choices.map((choice) => (
        <ChoiceButton
          key={choice.index}
          text={choice.text}
          disabled={!props.isCurrent}
          choose={buildChoiceCallback(choice.index, props.chooseChoice)}
        />
      ))}
    </ul>
  );
};

function mapStateToProps(state: RootState, ownProps: DialogueChoicesOwnProps): DialogueChoicesStateProps {
  const current = currentBeat(state);
  return {
    isCurrent: current !== undefined && current.beatType === "choices" && current.choices === ownProps.choices,
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
