import { ReactText } from 'react'

// TOAST
import { toast } from 'react-toastify'

const toastConfig = { position: toast.POSITION.BOTTOM_RIGHT }

const errorNotification = (message: string): ReactText => toast.error(message, toastConfig)
const successNotification = (message: string): ReactText => toast.success(message, toastConfig)

export { errorNotification, successNotification }
