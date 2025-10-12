export function Getusername(user: string) {
  //  REMOVED @ AND PUT IN LOWERCASE
  const emailRemoved = user.replace("@gmail.com", "");
  const username: any = emailRemoved.toLowerCase();

  // TRANSFORM IN A LIST
  const leters = "abcdefghijklmnopqrstuvwxyz";
  const alfabeto = leters.split("");

  let i = 0;
  let newlist = "";

  alfabeto.forEach((leter, index) => {
    for (const i in username) {
      if (leter === username[i]) {
        newlist += index;
      }
    }
  });
  if (username.length > 5) {
    const end = username.length / 2;
    const numersOfuser = newlist.slice(0, end);
    return username + numersOfuser;
  } else {
    return username + newlist;
  }
}
