
function MessageBox({username, textColor}){
    let styles = {color: textColor};
    return (
        <div className="mt-3 container offset-5 mb-3">
            <h2 style={styles}>Hello, {username}</h2>
        </div>
    )
};

export default MessageBox;