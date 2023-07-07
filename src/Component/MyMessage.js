const MyMessage = ({ message }) => {

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {month:'short',weekday:'short', hour: 'numeric', minute: 'numeric' };
    const formattedTime = date.toLocaleString('en-US', options);
    return formattedTime;
    };

  if (message.attachments && message.attachments.length > 0) {
    return (
      <>
      <div style={{position:'relative',width:'20%',float:'right',border:"green"}}>
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
          style={{ float: 'right'}}
      />
      <div className="time-container" style={{ position: "absolute", bottom: "0", right: "0",top:"2", padding: "0px",       fontSize:'10px',color:'white'}}>
        <span className="message-time">{formatTime(message.created)}</span>
     </div>
  </div>
 </>
    );
  }

  return (
    <div>
    <div className="messages mymessage"  style={{float: 'right', marginRight: '0px', color: 'black', backgroundColor: 'lightgreen ',display:"flex", borderRadius:" 20px 0px 25px 20px"}}>

        <span>  {message.text}</span>
     
        <span className="time-container" style={{ paddingTop: "10px",marginLeft:"5px",fontSize:'10px'}}>
                    <span className="message-time ">{formatTime(message.created)}</span>
        </span>
  
    </div>
    </div>
  );

};

export default MyMessage;
