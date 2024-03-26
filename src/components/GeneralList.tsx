import useGenres from "../hooks/useGenres";

const GeneralList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default GeneralList;
