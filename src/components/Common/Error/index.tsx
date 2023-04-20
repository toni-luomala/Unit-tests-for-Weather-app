import { ErrorMessage } from './styles';

const Error = ({ error }: any) => {
  return (
    <ErrorMessage>
      <h2>Error!</h2>
      <p>{error.message}</p>
    </ErrorMessage>
  );
};

export default Error;
