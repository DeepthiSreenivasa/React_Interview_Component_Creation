const Dropdown = ({ options = [], selectedValue, onChange }) => {
  const getSelectedId = (event) => {
    onChange(Number(event.target.value));
  };

  const selecteCountry = options.find((item) => item.id === selectedValue);

  if (!options.length) return <div>No Data Found</div>;

  return (
    <>
      <select onChange={($event) => getSelectedId($event)}>
        {options.map((item) => (
          <option value={selectedValue}>{item.label}</option>
        ))}
      </select>
      <div>{selecteCountry.label}</div>
    </>
  );
};

export default Dropdown;
