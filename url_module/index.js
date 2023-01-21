import url from "url";
const myURL = new url.URL(
	"https://www.youtube.com/watch?v=OPrP_ge9xpE&list=PLbGui_ZYuhijy1SpwtIS9IwL6OJdbr4kE&index=13&ab_channel=GeekyShows"
);
console.log(myURL.search);
console.log(myURL.searchParams);

console.log(myURL.searchParams.get("ab_channel"));
