let User = function (data) {
  this.data = data;
  this.errors = [];
};

User.prototype.cleanUp = function () {
  if (typeof this.data.email != "string") {
    this.data.email = "";
  }
  if (typeof this.data.password != "string") {
    this.data.password = "";
  }

  // get rid of any bogus properties
  this.data = {
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password,
  };
};

User.prototype.validateEmail = function () {
  console.log(this.data.email);
  if (this.data.email.length == 0) {
    this.errors.push("Please, provide the email");
  }
  if (this.data.email.length > 100) {
    this.errors.push("Email can't exceed 100 characters");
  }
  if (!this.data.email.includes("gmail")) {
    this.errors.push("You must provide a valid email address");
  }
};

User.prototype.login = async function () {
  try {
    this.cleanUp();
    this.validateEmail();
  } catch (error) {
    throw error;
  }
};

module.exports = User;
