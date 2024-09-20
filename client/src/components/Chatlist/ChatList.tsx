// ChatList.js

import styles from "./ChatList.module.css";

const ChatList = () => {
  const chats = [
    {
      id: 1,
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      lastMessage: "Hey, how are you?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      lastMessage: "See you tomorrow!",
      timestamp: "Yesterday",
    },
    {
      id: 3,
      name: "Alex Johnson",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
      lastMessage: "Let’s catch up later.",
      timestamp: "12:45 PM",
    },
  ];

  return (
    <div className={styles.chat_list}>
      {chats.map((chat) => (
        <div key={chat.id} className={styles.chat_item}>
          <img
            src={chat.profilePic}
            alt="profile"
            className={styles.profile_pic}
          />
          <div className={styles.chat_details}>
            <div className={styles.chat_header}>
              <span className={styles.chat_name}>{chat.name}</span>
              <span className={styles.chat_time}>{chat.timestamp}</span>
            </div>
            <div className={styles.message}>{chat.lastMessage}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
