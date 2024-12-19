function sendMessage() {
    const chatBox = document.getElementById('chatBox');
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        // Kullanıcı mesajını oluştur
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = messageText;
        chatBox.appendChild(userMessage);

        // Mesajı temizle
        messageInput.value = "";

        // Bot cevabı 
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot-message');
            botMessage.textContent = "Bu otomatik bir cevap.";
            chatBox.appendChild(botMessage);

            // Scroll kaydırma
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 500);
    }
}
