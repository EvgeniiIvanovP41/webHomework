// задание 1
var authUserData = null;
var userDatabase = [];

function emailCorrect(email) {
  if (email.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i) != null) {
    return true;
  }
  return false;
}

function passwordCorrect(password) {
  if (password.length == 6 && password[0] == password[0].toUpperCase() && /[0-9]/g.test(password) == true) {
    return true;
  }
  return false;
}

function register(email, password) {
  let check = false;
  if (emailCorrect(email) == true) {
    if (passwordCorrect(password) == true) {
      for (let i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].email == email) {
          check = true;
        }
      }
      if (check != true) {
        userDatabase.push({ email: email, password: password });
        return true;
      }
    }
  }
  return false;
}

function signIn(email, password) {
  let check = false;
  if (emailCorrect(email) == true) {
    if (passwordCorrect(password) == true) {
      for (let i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].email == email) {
          check = true;
        }
      }
      if (check == true) {
        authUserData = true;
        return true;
      }
    }
  }
  return false;
}

function signOut() {
  authUserData = null;
}

function resetPassword(email, oldPassword, newPassword) {
  for (let i = 0; i < userDatabase.length; i++) {
    if (userDatabase[i].email == email) {
      if (oldPassword != newPassword) {
        if (passwordCorrect(Newpassword) == true) {
          userDatabase[i].password = newPassword;
        }
      }
    }
  }
  return false;
}

function isAuth() {
  if (authUserData == true) {
    return true;
  }
  return false;
}

//задание 2 
function validator(value) {
  let test = true; //переменая которая возвращает true, если проверка прошла упешно, и false в противном случае
  return result = {
    object: value, // переманная хранящая объект проверки
    min(number) {
      if (test == true) { // проверка на то чтобы все проверки в цепочке прошли успешно, или просто возвращаем false (так же по аналогии в следующих функциях)
        if (this.object > number) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return false;
    },
    max(number) {
      if (test == true) {
        if (this.object <= number) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return false;
    },
    minLenght(arr) {
      if (test == true) {
        if (this.object.lenght > arr.lenght) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return false;
    },
    maxLenght(arr) {
      if (test == true) {
        if (this.object.lenght <= arr.lenght) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return false;
    },
    equal(checkValue) {
      if (test == true) {
        if (checkValue.toString() == this.object.toString()) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return this;
    },
    isString() {
      if (test == true) {
        if (typeof this.object === "string" || this.object instanceof String) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return false;
    },
    isEmail() {
      if (test == true) {
        if (this.object.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i) != null) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return false;
    },
    isArray() {
      if (test == true) {
        if (this.object instanceof Array) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return false;
    },
    isNumber() {
      if (test == true) {
        if (this.object instanceof Number && !isNaN(this.object)) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return false;
    },
    isFloat() {
      if (test == true) {
        if (!isNaN(this.object) && this.object.toString().indexOf('.') != -1) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return false;
    },
    isDate() {
      if (test == true) {
        if (this.object.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/) != null) {
          this.test = true;
          return this;
        }
        this.test = false;
        return this;
      }
      this.test = false;
      return false;
    },
  }
}