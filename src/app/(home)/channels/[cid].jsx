import {  ActivityIndicator, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Channel as ChannelType, useChatContext } from 'stream-chat-expo';
import { Channel, MessageInput, MessageList } from 'stream-chat-expo'; 

const Index = () => {
  const [channel, setChannel] = useState (null);
  const { cid } = useLocalSearchParams(); 
  const {client} =useChatContext();
  useEffect(()=>{
    const fetchChannel =async()=>{
        const channels =await client.queryChannels({cid:cid})
        setChannel(channels[0])
    }
    fetchChannel();
  },[cid])
 if(!channel){
  return <ActivityIndicator/>
 }

  return(
    <Channel channel={channel}>
        <MessageList/>
        <MessageInput/>
    </Channel>
)
};

export default Index;
