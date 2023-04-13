type Props = {
  name: string | undefined;
  admin1: string | undefined;
};

const LocationName = ({ name, admin1 }: Props) => {
  return (
    <div>
      <h2>
        {name}
        {admin1 ? ', ' + admin1 : ''}
      </h2>
    </div>
  );
};

export default LocationName;
