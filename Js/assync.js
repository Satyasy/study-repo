const token = ~~[Math.random() * 12345678];
const pict = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  console.log("prosesing data token usrname...");
  setTimeout(() => {
    callback({ token, username });
  }, 200);
}

function getUser(token) {
  if (token)
    setTimeout(() => {
      return { apiKey: "axdf122" };
    }, 500);
}

login("revano_sat", function (response) {
  console.log("Yeayy, itu bisa! =>", response);
  const { token } = response;
  const apiKey = getUser(token);
  console.log({ apiKey });
});

const apiKey = getUser(user.token);
function getImage(apiKey) {
  if (apiKey) return pict;
}

const getImageUser = getImage(apiKey);
// console.log(apiKey);
// console.log(getImageUser);
