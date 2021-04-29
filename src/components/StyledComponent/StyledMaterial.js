import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  &:hover {
    background-color: #5469d4;
  }
`;

const StyledMaterial = () => {
  return (  
    <div>
      <h1>STYLED MATERIAL UI</h1>
      <Button>Default</Button>
      <StyledButton>Styled</StyledButton>
    </div>
  );
}
 
export default StyledMaterial;