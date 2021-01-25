import React, { Fragment, useEffect, useRef, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
// RCE CSS
import 'react-chat-elements/dist/main.css';
// MessageBox component
import { MessageBox } from 'react-chat-elements';
import { ChatItem } from 'react-chat-elements'
import { MessageList } from 'react-chat-elements'
import { Button } from 'react-chat-elements'



const Chat = () => {
  return (
    <Fragment>
      <Breadcrumb title="Dashboard" parent="Dashboard" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>All Conversations</h5><span>conversation history</span>
              </div>
              <div className="card-body">
                
                <Button
                text={'Refresh'} buttonRef={'bt'} />
      
                <ChatItem
                    avatar={'https://facebook.github.io/react/img/logo.svg'}
                    alt={'Reactjs'}
                    title={'Facebook'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={2} />
                        
                        
                        
                        
                    <MessageList
                    className='message-list'
                    lockable={false}
                    oneClick={() =>  this.setState({show: true})}
                    toBottomHeight={'100%'}
                    dataSource={[
                            {
                                    position: 'right',
                                    type: 'text',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                    date: new Date(),
                            },
                            
                              {
                                    position: 'left',
                                    type: 'text',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                    date: new Date(),
                            },
        
    ]} />
      
                      
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Chat;