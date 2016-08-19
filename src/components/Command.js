import React from 'react';
import {visibleType, commandsType} from '../utils/customPropTypes';

const renderOutput = visible => JSON.stringify(visible);

const onEnter = evt => {
  if (evt.key === 'Enter' || evt.which === 13) {
    console.log(evt.target.value);
  }
};

const Command = ({visible}) => (
  <div>
    <div>
      <div>prompt</div>
      <input
        disabled={visible}
        onKeyPress={onEnter}
        autoComplete={false}
        autoFocus
      />
    </div>
    {renderOutput(visible)}
  </div>
);

Command.propTypes = {
  visible: visibleType,
};

Command.contextTypes = {
  commands: commandsType,
};

export default Command;
