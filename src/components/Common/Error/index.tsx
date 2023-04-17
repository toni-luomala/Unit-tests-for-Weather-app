import styled from '@emotion/styled';

const ErrorMessage = styled.div({
  color: 'red',
  textAlign: 'center',
});

const Error = ({ error }: any) => {
  return (
    <ErrorMessage>
      <h2>Error!</h2>
      <p>{error.message}</p>
    </ErrorMessage>
  );
};

export default Error;
