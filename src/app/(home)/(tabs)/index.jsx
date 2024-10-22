import { ChannelList } from 'stream-chat-expo';
import { router } from 'expo-router';
import React from 'react';

const MainTab = () => {
  return (
    <ChannelList onSelect={(channel) => router.push(`/channels/${channel.cid}`)} />
  );
};

export default MainTab;
