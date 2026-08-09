const Accordian = ({ accordionData = [], openItemId, onChange }) => {
  const toggleAccordian = (id) => {
    let changedId = openItemId === id ? null : id;
    onChange(changedId);
  };

  if (!accordionData.length) {
    return <div>No Data</div>;
  }

  return (
    <>
      <h1>This is Accordian Page</h1>
      {accordionData.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => toggleAccordian(item.id)}>
            {openItemId === item.id ? "-" : "+"}
          </button>
          {openItemId === item.id && <div>{item.content}</div>}
          ____________________________________
        </div>
      ))}
    </>
  );
};

export default Accordian;
