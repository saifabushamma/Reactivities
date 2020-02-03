import React, { Fragment } from 'react'
import { Segment, Header, Form, Button, Comment } from 'semantic-ui-react';

const ActivityDetailedChat = () => {
    return (
        <Fragment>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{ border: 'none' }}
            >
                <Header>Chat about this event</Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar  src={'/assets/user.png'} />
                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>How artistic</Comment.Text>
                        </Comment.Content>
                    </Comment>
                    <Comment>
                        <Comment.Avatar  src={'/assets/user.png'} />
                        <Comment.Content>
                            <Comment.Author as='a'>Saif</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 6:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>HII</Comment.Text>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea />
                        <Button
                            content='Add Reply'
                            labelPosition='left'
                            icon='edit'
                            primary
                        />
                    </Form>
                </Comment.Group>
            </Segment>
        </Fragment>
    );
};

export default ActivityDetailedChat
