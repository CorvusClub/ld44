import { Choice } from "inkjs/engine/Choice";
import React from "react";
import moize from "moize";
import { RootState } from "@app/redux/reducer";
import { dialogueChoices } from "@app/redux/selectors";
import { Dispatch } from "redux";
import { actionCreators } from "@app/redux/actions";
import { connect } from "react-redux";

type ChoiceProps = Readonly<{
  text: string;
  choose: () => void;
}>;
const ChoiceButton = (props: ChoiceProps) => {
  return <button onClick={props.choose}>{props.text}</button>;
};

type DialogueChoicesStateProps = Readonly<{
  choices: Choice[];
}>;
type DialogueChoicesDispatchProps = Readonly<{
  chooseChoice: (index: number) => void;
}>;
type DialogueChoicesProps = DialogueChoicesStateProps & DialogueChoicesDispatchProps;

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
          choose={buildChoiceCallback(choice.index, props.chooseChoice)}
        />
      ))}
    </ul>
  );
};

function mapStateToProps(state: RootState): DialogueChoicesStateProps {
  return {
    choices: dialogueChoices(state),
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
