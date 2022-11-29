const { ObjectId } = require("mongodb");

const checkUserEmail = function (email) {
  if (typeof email != "string" || email == null || email.trim().length === 0)
    throw "Error: Invalid Email";
  let reg =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!reg.test(email)) {
    throw "Error: Invalid Email";
  }
  return email.toLowerCase();
};

const checkPassword = function (password) {
  if (
    typeof password != "string" ||
    password == null ||
    password.trim().length === 0
  )
    throw "Error: Invalid Password";

  let reg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!reg.test(password)) {
    throw "Error: Invalid Password";
  }
  return password;
};

const checkUserType = function (userType) {
  if (
    typeof userType != "string" ||
    userType == null ||
    userType.trim().length === 0
  )
    throw "Error: Invalid User Type";
  if (userType === "true") {
    return true;
  } else if (userType === "false") {
    return false;
  } else {
    throw "Error: Invalid User Type";
  }
};
function ismatched(fullString, substring) {
  if(typeof fullString !='string'){
    fullString=fullString.toString();
}
  fullString=fullString.toLowerCase();
  substring=substring.toLowerCase();
  let array = Array.from(fullString);
  let sub = Array.from(substring);
  for(let i=0;i<=array.length-sub.length;i++){
      let j=0;
      if(array[i]==sub[j]){
        while(j<sub.length&& array[i+j]==sub[j]){
          j++;
        }
        if(j==sub.length){
          return true;
        }
      }
  }
  return false;
};

const checkName = function (name) {
  if (typeof name != "string" || name == null || name.trim().length === 0)
    throw "Error: Invalid Name";
  name = name.trim();
  let reg = /^[a-z']+$/i;
  let regWrong = /^.*(''+).*$/; // if there is a consecutive ''''', even more than 2, it's wrong
  if (!reg.test(name)) {
    throw "Error: Invalid Name";
  } else {
    if (regWrong.test(name)) {
      throw "Error: Invalid Name";
    }
  }
  return name;
};

const checkPlace = function (place) {
  if (typeof place != "string" || place == null || place.trim().length === 0)
    throw "Error: Invalid Place Name";
  place = place.trim();
  return place;
};

const checkPhone = function (phone) {
  if (typeof phone != "string" || phone == null || phone.trim().length === 0)
    throw "Error: Invalid Phone Number";
  phone = phone.trim();
  return phone;
};

const checkId = function (id) {
  if (typeof id != "string" || id == null || id.trim().length === 0)
    throw "Error: Invalid Object ID";
  id = id.trim();
  if (!ObjectId.isValid(id)) throw "Error: Invalid Object ID";
  return id;
};

module.exports = {
  checkUserEmail,
  checkPassword,
  checkUserType,
  checkName,
  checkPlace,
  checkPhone,
  checkId,
  ismatched
};
