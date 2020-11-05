// задание 1
var authUserData = null;
var userDatabase = [];

function emailCorrect(email) {
  if (email.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i) !== null) {
    return true;
  }
  return false;
}

function passwordCorrect(password) {
  if (password.length === 6 && password[0] === password[0].toUpperCase() && /[0-9]/g.test(password) === true) {
    return true;
  }
  return false;
}

function register(email, password) {
  let searchUserIndex = null;
  if (emailCorrect(email) === true && passwordCorrect(password) === true) {
    searchUserIndex = userDatabase.findIndex((user) => user.email === email && user.password === password);
    if (searchUserIndex === -1) {
      userDatabase.push({ email: email, password: password });
      return true;
    }
  }
  return false;
}

function signIn(email, password) {
  let searchUserIndex = null;
  if (emailCorrect(email) === true && passwordCorrect(password) === true) {
    searchUserIndex = userDatabase.findIndex((user) => user.email === email && user.password === password);
    if (searchUserIndex !== 1) {
      authUserData = true;
      return true;
    }
  }
  return false;
}

function signOut() {
  authUserData = null;
}

function resetPassword(email, oldPassword, newPassword) {
  for (let i = 0; i < userDatabase.length; i++) {
    if (userDatabase[i].email === email && oldPassword !== newPassword && passwordCorrect(newPassword) === true) {
      userDatabase[i].password = newPassword;
    }
  }
  return false;
}

function isAuth() {
  if (authUserData === true) {
    return true;
  }
  return false;
}

//задание 2 
function validator(value) {
  return result = {
    object: value, // переманная хранящая объект проверки
    test: true, //переменая которая возвращает true, если проверка прошла упешно, и false в противном случае
    validate: function() {
      return this.test;
    },
    min(number) {
      if (this.test && this.object > number) { // проверка на то чтобы все проверки в цепочке прошли успешно, или просто возвращаем false (так же по аналогии в следующих функциях)
        this.test = true;
        return this;
      }
      this.test = false;
      return false;
    },
    max(number) {
      if (this.test && this.object <= number) {
        this.test = true;
        return this;
      }
      this.test = false;
      return false;
    },
    minLenght(arr) {
      if (this.test && this.object.lenght > arr.lenght) {
        this.test = true;
        return this;
      }
      this.test = false;
      return false;
    },
    maxLenght(arr) {
      if (this.test && this.object.lenght <= arr.lenght) {
        this.test = true;
        return this;
      }
      this.test = false;
      return false;
    },
    equal(checkValue) {
      if (this.test && checkValue.toString() === this.object.toString()) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    isString() {
      if (this.test && this.object instanceof String) {
        this.test = true;
        return this;
      }
      this.test = false;
      return false;
    },
    isEmail() {
      if (this.test && this.object.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i) !== null) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    isArray() {
      if (this.test && this.object instanceof Array) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    isNumber() {
      if (this.test && this.object instanceof Number) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    isFloat() {
      if (this.test && !isNaN(this.object) && this.object.toString().indexOf('.') !== -1) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    isDate() {
      if (this.test === true && this.object.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/) !== null) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
  }
}
console.log(validator("sajgh").isEmail().validate()); //(пример того как я проверял валидатор)