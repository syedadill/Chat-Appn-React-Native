import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, Stack } from 'expo-router'
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance('ac88vvhktpf3');

const _layout = () => {
    useEffect(()=>{
        const connect = async()=>{
            await client.connectUser(
                {
                  id: 'jlahey',
                  name: 'Jim Lahey',
                  image: 'https://i.imgur.com/fR9Jz14.png',
                },
                client.devToken('jlahey'),
              );

        // Channel Code

// const channel = client.channel('messaging', 'the_park', {
//     name: 'First Channel',
//   });
//   await channel.watch();
        }
        connect();
    },[])
  return (
    <OverlayProvider>
        <Chat client={client}>
          <Slot/>
          </Chat>
    </OverlayProvider>

  );
}

export default _layout