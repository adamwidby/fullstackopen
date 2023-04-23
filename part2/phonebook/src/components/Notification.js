const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  const style = {
    color: "green",
    fontSize: 20,
    border: "2px solid green",
    borderRadius: 5,
    backgroundColor: "bisque",
  };
  if (message.includes("ERROR")) {
      style.color = 'red'
      style.border = '2px solid red'
  }

  return <div style={style}>{message}</div>;
};

export default Notification;
