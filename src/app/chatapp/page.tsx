"use client";
import { io } from "socket.io-client";

export default function ChatApp() {
  const socket = io("http://localhost:8000", {
    transports: ["websocket"],
  });

  //   socket.on("chat message", (chat) => {
  socket.on("message", (msg, clientOffset) => {
    showMessage(msg, clientOffset);
    console.log("client side message: " + msg);
  });
  //   });

  const sendChatMessage = () => {
    const messageInput: HTMLElement | null = document.getElementById("message");
    if (messageInput) {
      const message = (messageInput as HTMLInputElement).value;
      socket.emit("chat message", message, 1);
      (messageInput as HTMLInputElement).value = "";
    }
  };

  const showMessage = (msg: string, clientOffset: string) => {
    const messagesDiv: HTMLElement | null = document.getElementById("messages");
    if (messagesDiv) {
      const messageElement = document.createElement("div");
      messageElement.textContent = `Server: ${msg} ${clientOffset}`;
      messagesDiv.appendChild(messageElement);
    }
  };

  return (
    <div>
      <h1>Chat Application</h1>
      <div id="messages"></div>
      <input type="text" id="message" placeholder="Type a message" />
      <button onClick={sendChatMessage} id="send">
        Send
      </button>
    </div>
  );
}
