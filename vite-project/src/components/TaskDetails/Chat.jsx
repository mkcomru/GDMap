import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import styles from './Chat.module.css';
import PropTypes from 'prop-types';

const Chat = ({ taskId }) => {
    // taskId будет использоваться для идентификации чата при интеграции с бэкендом
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const message = {
            id: Date.now(),
            taskId,
            text: newMessage,
            sender: 'user',
            timestamp: new Date().toISOString()
        };

        setMessages([...messages, message]);
        setNewMessage('');
        console.log(`Сообщение отправлено в чат задания ${taskId}`);
    };

    return (
        <div className={styles.chat}>
            <div className={styles.messages}>
                {messages.map(message => (
                    <div key={message.id} className={`${styles.message} ${styles[message.sender]}`}>
                        <p>{message.text}</p>
                        <span className={styles.timestamp}>
                            {new Date(message.timestamp).toLocaleTimeString()}
                        </span>
                    </div>
                ))}
            </div>

            <form className={styles.inputArea} onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Введите сообщение..."
                />
                <button type="submit">
                    <FaPaperPlane />
                </button>
            </form>
        </div>
    );
};

Chat.propTypes = {
    taskId: PropTypes.string.isRequired
};

export default Chat;