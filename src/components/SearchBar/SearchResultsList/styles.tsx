import styled from '@emotion/styled';

const ResultsContainer = styled.div({
  position: 'relative',
});

const ResultsDiv = styled.div({
  position: 'absolute',
  top: '5px',
  backgroundColor: 'white',
  padding: '0px 10px 5px 10px',
  color: 'black',
  width: '100%',
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  WebkitBoxSizing: 'border-box',
  boxShadow: '0px 7px 10px 0px rgba(0,0,0,0.5)',
  '@media(max-width: 550px)': {
    position: 'fixed',
    top: '80px',
    left: '0px',
  },
});

export { ResultsContainer, ResultsDiv };
