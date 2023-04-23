import styled from '@emotion/styled';

const ResultsContainer = styled.div({
  position: 'absolute',
  width: '100%',
  maxWidth: '277px',
  '@media(max-width: 550px)': {
    maxWidth: '100%',
  },
});

const ResultsDiv = styled.div({
  position: 'relative',
  top: '102px',
  right: '57px',
  backgroundColor: 'white',
  color: 'black',
  padding: '0px 10px 5px 10px',
  width: '100%',
  boxShadow: '0px 7px 10px 0px rgba(0,0,0,0.5)',
  '@media(max-width: 550px)': {
    position: 'fixed',
    top: '80px',
    left: '0px',
  },
});

export { ResultsContainer, ResultsDiv };
