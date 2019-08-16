
declare interface NotificationRequest {
  title: string;
  message: string; 
  clickCB: Function
}
declare module Notifications {
  export function notify(e: NotificationRequest): void;
}