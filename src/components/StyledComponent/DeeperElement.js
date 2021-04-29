import React from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

const StyledChip = styled(Chip)`
  svg {
    fill: black;
  }

  & .MuiChip-label {
    color: gold;
  }
`;

const DeeperElement = () => {
  const handleDelete = () => {
    console.log('clicked');
  };

  return (
    <div>
      <h1>DEEPER ELEMENT</h1>
      <StyledChip
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default DeeperElement;
