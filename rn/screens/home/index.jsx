import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import AddNewPost from '../addNewPost';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Post from '../../components/Post';
import {posts, users} from '../../assets/data';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#020202'}}>
      <ScrollView>
        {posts.map((post, i) => {
          return (
            <Post
              name={users[post.createdBy].name}
              username={users[post.createdBy].username}
              text={post.text}
              media={post.media}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
