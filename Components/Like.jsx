const Like = ({ value = false, onChange }) => {
  const updateLikeStatus = () => {
    onChange(!value);
  };

  return <div onClick={updateLikeStatus}>{value ? "♥" : "♡"}</div>;
};

export default Like;
