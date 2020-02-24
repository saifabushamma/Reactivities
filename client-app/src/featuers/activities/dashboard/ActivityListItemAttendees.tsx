import React from 'react'
import { List, Image, Popup } from 'semantic-ui-react'
import { IAttendee } from '../../../app/models/activity'

interface IProps {
    attendees: IAttendee[]
}

export const ActivityListItemAttendees: React.FC<IProps> = ({ attendees }) => {
    return (
        <List horizontal>
            {attendees.map((attendees) => (
                <List.Item key={attendees.username}>
                    <Popup
                        header={attendees.username}
                        trigger={<Image size='mini' circular src={attendees.image || '/assets/user.png'} />}
                    />
                </List.Item>
            ))}
        </List>
    )
}
