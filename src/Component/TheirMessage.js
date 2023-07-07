const TheirMessage = ({ lastMessage, message }) => {

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {month:'short',weekday:'short', hour: 'numeric', minute: 'numeric' };
    const formattedTime = date.toLocaleString('en-US', options);
    return formattedTime;
    };

  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}
      {message.attachments && message.attachments.length > 0
        ? (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        : (
          <div className="messages Theirmessage" style={{ float: 'left', backgroundColor: 'pink',color:"black", marginLeft: isFirstMessageByUser ? '4px' : '48px',borderRadius:" 0px 20px 20px 25px" }}>
          <span>{message.text}</span>  
            
        <span className="time-container" style={{ paddingTop: "10px",marginLeft:"5px",fontSize:'10px'}}>
                    <span className="message-time ">{formatTime(message.created)}</span>
        </span>
  
          </div>
        )}
    </div>
  );
};

export default TheirMessage;
