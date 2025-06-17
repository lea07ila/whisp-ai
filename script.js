const messageInput = document.getElementById('messageInput');
const thinkBtn = document.getElementById('thinkBtn');
const searchBtn = document.getElementById('searchBtn');
const sendBtn = document.getElementById('sendBtn');
const chatContainer = document.getElementById('chatContainer');
const messageListWrapper = document.getElementById('messageListWrapper');

const sidebar = document.getElementById('sidebar');
// The toggleSidebarBtn ID is now on the button in the footer
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
const contentArea = document.getElementById('contentArea');

// Sidebar toggle functionality
toggleSidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  // Adjust content area and chat input based on sidebar state
  if (sidebar.classList.contains('collapsed')) {
    contentArea.style.marginLeft = '60px'; // Adjust for collapsed sidebar width
    chatContainer.style.width = 'calc(100% - 60px)';
    chatContainer.style.left = '60px';
  } else {
    contentArea.style.marginLeft = '250px'; // Adjust for expanded sidebar width
    chatContainer.style.width = 'calc(100% - 250px)';
    chatContainer.style.left = '250px';
  }
});

thinkBtn.addEventListener('click', function() {
  this.classList.toggle('active');
});

searchBtn.addEventListener('click', function() {
  this.classList.toggle('active');
});

messageInput.addEventListener('input', () => {
  const singleLineHeight = 48;
  const twoLinesHeight = 72;
  
  messageInput.style.height = 'auto';
  
  if (messageInput.value.trim() === '') {
    messageInput.style.height = singleLineHeight + 'px';
    sendBtn.classList.remove('active-send');
  } else {
    messageInput.style.height = (messageInput.scrollHeight > twoLinesHeight) 
      ? messageInput.scrollHeight + 'px'
      : singleLineHeight + 'px';
    
    sendBtn.classList.add('active-send');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const singleLineHeight = 48;
  const twoLinesHeight = 72;
  
  if (messageInput.value.trim() !== '') {
    messageInput.style.height = 'auto';
    messageInput.style.height = (messageInput.scrollHeight > twoLinesHeight) 
      ? messageInput.scrollHeight + 'px'
      : singleLineHeight + 'px';
    
    sendBtn.classList.add('active-send');
  } else {
    messageInput.style.height = singleLineHeight + 'px';
    sendBtn.classList.remove('active-send');
  }

  // Initial adjustment for content area based on sidebar state
  // Check if sidebar is collapsed on initial load and adjust contentArea
  if (sidebar.classList.contains('collapsed')) {
    contentArea.style.marginLeft = '60px';
    chatContainer.style.width = 'calc(100% - 60px)';
    chatContainer.style.left = '60px';
  } else {
    contentArea.style.marginLeft = '250px';
    chatContainer.style.width = 'calc(100% - 250px)';
    chatContainer.style.left = '250px';
  }
});

function appendMessage(text, type) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message', type);
  messageDiv.textContent = text;
  messageListWrapper.appendChild(messageDiv);
  messageListWrapper.scrollTop = messageListWrapper.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  if (messageText) {
    appendMessage(messageText, 'user-message');
    messageInput.value = '';
    messageInput.style.height = '48px';
    sendBtn.classList.remove('active-send');

    setTimeout(() => {
      appendMessage("Привет, чем могу помочь?", 'bot-message');
    }, 500);
  }
});

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendBtn.click();
  }
});
