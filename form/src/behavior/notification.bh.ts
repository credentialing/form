const requestAccess = async () => {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    return true;
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();

    return permission === "granted";
  }
};

export interface NotificationRequest {
  title: string;
  message: string;
  clickCB: Function;
}

export class Notifications {
  constructor() {
    this.init();
  }

  async init() {
    await requestAccess();
  }

  notify({
    title = "Update",
    message = "Your Cv has been processed",
    clickCB = () => {
      console.log('notification click'); //eslint-disable-line
    }
  }: NotificationRequest) {
    const notification = new Notification(title, {
      body: message,
      requireInteraction: false
    } as NotificationOptions);

    notification.onclick = () => {
      clickCB();
      notification.close();
    };
  }
}
