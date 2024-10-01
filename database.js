import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4lAz1K8ajP1RcGMNDDnGKwZcz60_eboY",
  authDomain: "weddinginvitation-816dd.firebaseapp.com",
  databaseURL: "https://weddinginvitation-816dd-default-rtdb.firebaseio.com",
  projectId: "weddinginvitation-816dd",
  storageBucket: "weddinginvitation-816dd.appspot.com",
  messagingSenderId: "1009849635487",
  appId: "1:1009849635487:web:488d129a48c620449a88aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {
  getDatabase,
  set,
  get,
  update,
  remove,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
const db = getDatabase();

let nameGuest = document.getElementById("guest-name");
let emailGuest = document.getElementById("guest-email");
let phoneGuest = document.getElementById("guest-phone");
let partnerGuest = document.getElementById("guest-partner");
let message = document.getElementById("message");
let messageGuest = document.getElementById("not-attendance-name");

document.querySelector("#attendance").addEventListener("click", () => {
  if (
    nameGuest.value == "" ||
    emailGuest.value == "" ||
    phoneGuest.value == "" ||
    partnerGuest == ""
  ) {
    alert(
      "Hãy kiểm tra lại xem bạn đã điền đầy đủ thông tin chưa nhé, cảm ơn!!!"
    );
  } else {
    set(ref(db, "Attendance/" + phoneGuest.value), {
      Name: nameGuest.value,
      Email: emailGuest.value,
      Phone: phoneGuest.value,
      Partner: partnerGuest.value,
    })
      .then(() => {
        alert("Cảm ơn!!");
      })
      .catch((error) => {
        alert("Đã xảy ra lỗi, hãy thử lại!!!");
      });
  }
});

document.querySelector("#newMessage").addEventListener("click", () => {
  if (message.value == "" || messageGuest.value == "") {
    alert(
      "Hãy kiểm tra lại xem bạn đã điền đầy đủ thông tin chưa nhé, cảm ơn!!!"
    );
  } else {
    set(ref(db, "Message/" + messageGuest.value), {
      Message: message.value,
    })
      .then(() => {})
      .catch((error) => {
        alert("Đã xảy ra lỗi, hãy thử lại!!!");
      });
  }
});
