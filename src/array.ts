// Testing the language features
function getUserInfo (user: Array<string>): void {
  user.map((attributeOfUser: string) => {
    console.log(attributeOfUser);
  });
};

export default getUserInfo;