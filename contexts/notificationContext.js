import { createContext, useState } from "react";

export const NotificationContext = createContext({
  notification: {
    title: '',
    message: '',
    type: '',
    icon: null,
    buttonAction: null
  },
  showNotification: function(notificationData){},
  hideNotification: function(){}
})

export default NotificationContext

export function NotificationContextProvider({ children }){ 
  const [activeNotification, setActiveNotification] = useState(null);

  function showNotificationHandler(notificationData){
    setActiveNotification(notificationData)
  }

  function hideNotificationHandler(){
    setActiveNotification(null)
  }

  const context = {notification: activeNotification, showNotification: showNotificationHandler, hideNotificationHandler: hideNotificationHandler}

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
}