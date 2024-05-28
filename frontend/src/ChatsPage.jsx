import {MultiChatWindow, MultiChatSocket, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'f5523bae-0d8e-4a06-a9fc-cc5dc1bba0e6', 
        props.user.username, 
        props.user.secret
    );
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
    )
}

export default ChatsPage