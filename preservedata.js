const key = 'cdata';

const fullname = document.getElementById('fullname');

const email1 = document.getElementById('email');

const message = document.getElementById('message');

let $data = window.localStorage.getItem(key);
if (!Object.is($data, null)) {
  $data = JSON.parse($data);
  if (Object.prototype.hasOwnProperty.call($data, 'fullname')) {
    fullname.value = $data.fullname;
  }
  if (Object.prototype.hasOwnProperty.call($data, 'email')) {
    email1.value = $data.email;
  }
  if (Object.prototype.hasOwnProperty.call($data, 'message')) {
    message.value = $data.message;
  }
}
fullname.addEventListener('change', (event) => {
  if (Object.is($data, null)) {
    window.localStorage.setItem(key, JSON.stringify({ fullname: event.target.value }));
  } else {
    $data.fullname = event.target.value;
    window.localStorage.setItem(key, JSON.stringify($data));
  }
});
email1.addEventListener('change', (event) => {
  if (Object.is($data, null)) {
    window.localStorage.setItem(key, JSON.stringify({ email: event.target.value }));
  } else {
    $data.email = event.target.value;
    window.localStorage.setItem(key, JSON.stringify($data));
  }
});
message.addEventListener('change', (event) => {
  if (Object.is($data, null)) {
    window.localStorage.setItem(key, JSON.stringify({ message: event.target.value }));
  } else {
    $data.message = event.target.value;
    window.localStorage.setItem(key, JSON.stringify($data));
  }
});