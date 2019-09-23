/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserList from './UserList';
import Chat from './Messages';

const ChatLayout = props => {
  const { socket } = props;

  useEffect(() => {
    socket.emit('chatOpen', { chatId: props.currentConnectionId });
  }, []);

  useEffect(() => {
    socket.emit('chatOpen', { chatId: props.currentConnectionId });
  }, [props.chatHistory]);

  return (
    <Main>
      <UserList
        userList={props.userList}
        socket={socket}
        currentUser={props.currentUser}
        currentConnectionId={props.currentConnectionId}
      />
      {props.chatHistory && (
        <Chat
          socket={socket}
          chatHistory={props.chatHistory}
          currentUser={props.currentUser}
          userList={props.userList}
          userTyping={props.userTyping}
        />
      )}
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .ant-card-body {
    padding: 0;
    margin: 0;
    border: none;
  }
`;

const mapStateToProps = state => {
  return {
    currentUser: state.userReducer.user,
    authReducer: state.authReducer,
    currentConnectionId: state.authReducer.connectionId
  };
};

export default connect(
  mapStateToProps,
  {}
)(ChatLayout);