import { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import styles from './Chat.module.css';
import PropTypes from 'prop-types';

const Chat = ({ taskId, onTaskComplete, isPendingConfirmation }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

  // Load messages from localStorage
    useEffect(() => {
        const savedMessages = localStorage.getItem(`chat_${taskId}`);
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, [taskId]);

  // Save messages to localStorage
    useEffect(() => {
        localStorage.setItem(`chat_${taskId}`, JSON.stringify(messages));
    }, [messages, taskId]);

  // Scroll to bottom when new messages are added
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const message = {
            id: Date.now(),
            text: newMessage,
            sender: 'user',
            timestamp: new Date().toISOString()
        };

        setMessages([...messages, message]);
        setNewMessage('');
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messages} ref={chatContainerRef}>
                {messages.map(message => (
                    <div key={message.id} className={`${styles.message} ${styles[message.sender]}`}>
                        <p>{message.text}</p>
                        <span className={styles.timestamp}>
                            {new Date(message.timestamp).toLocaleTimeString()}
                        </span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className={styles.bottomSection}>
                {!isPendingConfirmation && (
                    <button className={styles.completeButton} onClick={() => onTaskComplete(taskId)}>
                        <FaCheck /> Выполнено
                    </button>
                )}
                {isPendingConfirmation && (
                    <div className={styles.pendingConfirmation}>
                        Ожидает подтверждения выполнения
                    </div>
                )}
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
        </div>
    );
};

Chat.propTypes = {
    taskId: PropTypes.string.isRequired,
    onTaskComplete: PropTypes.func.isRequired,
    isPendingConfirmation: PropTypes.bool.isRequired
};

export default Chat;