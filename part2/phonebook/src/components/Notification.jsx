import PropTypes from 'prop-types'

const Notification = ({ notification, isError }) => {
    if (notification === null)
        return null

    return (
        <div className={isError ? 'error' : 'added'}>
            {notification}
        </div>
    )
}

Notification.propTypes = {
    notification: PropTypes.string,
    isError: PropTypes.bool.isRequired
}

export default Notification