const Tabs = ({ tabsData = [], activeTabId, onChange }) => {
  if (!tabsData.length) {
    return (
      <>
        {" "}
        <div>No Data Found</div>
      </>
    );
  }

  const getActiveTabId = (id) => {
    onChange(id);
  };

  const activeTab = () => {
    return tabsData.find((item) => item.id === activeTabId);
  };

  return (
    <>
      {tabsData.map((item) => (
        <>
          <span
            onClick={() => {
              console.log("itemId::", item.id);
              getActiveTabId(item.id);
            }}
          >
            {" "}
            {item.title}{" "}
          </span>
        </>
      ))}
      <div>------------------------------------</div>

      {activeTab().id === activeTabId && <div>{activeTab().content}</div>}
    </>
  );
};

export default Tabs;
