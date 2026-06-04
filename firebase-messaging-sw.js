importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCyVCJ6QvOnanx4A0wQADVtemPC9Jka_dI",
  authDomain: "h8af-8902d.firebaseapp.com",
  projectId: "h8af-8902d",
  messagingSenderId: "763106464913",
  appId: "1:763106464913:web:05d60cb00dd10ac3c99b30"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/icon.png"
    }
  );
});
