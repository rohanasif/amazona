import React from 'react'
import { Alert } from 'react-bootstrap'
function Message({ varient, children }) {
    return (
        <div>
            <Alert varient={varient}>
                {children}
            </Alert>
        </div>
    )
}
    Message.defaultProps = {
        varient:"info"
    }

export default Message
