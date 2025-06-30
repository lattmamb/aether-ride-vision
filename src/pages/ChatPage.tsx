
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ChatInterface from '@/components/chat/ChatInterface';

const ChatPage = () => {
  return (
    <MainLayout useAnimatedNav={true} showFooter={false}>
      <div className="min-h-screen bg-unity-midnight">
        <ChatInterface />
      </div>
    </MainLayout>
  );
};

export default ChatPage;
