export class Employee {
  name: UserName;
  login: UserLogin;
  picture: UserPicture;

  constructor(name: UserName, login: UserLogin, picture: UserPicture) {
    this.name = name;
    this.login = login;
    this.picture = picture;
  }
}

export class UserName {
  title: String;
  first: String;
  last: String;

  constructor(title: String, first: String, last: String) {
    this.title = title;
    this.first = first;
    this.last = last;
  }
}

export class UserLogin {
  username: String;

  constructor(username: String) {
    this.username = username;
  }
}

export class UserPicture {
  large: String;

  constructor(large: String) {
    this.large = large;
  }
}
