import PushNotification from 'react-native-push-notification';
import {channelId} from '@env';

export const sendLocalNotification = (title, message) => {
  PushNotification.localNotification({
    channelId,
    title,
    message,
  });
};

export const sendScheduleNotification = (title, message, date) => {
  PushNotification.localNotificationSchedule({
    channelId,
    title,
    message,
    date,
  });
};
