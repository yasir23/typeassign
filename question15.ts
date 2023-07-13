var dinnerGuast = ["arshad","aman", "alqadeer"];

console.log(`${dinnerGuast[1]} can't make to dinner.`);

dinnerGuast[1] = "ali";

for (var i = 0 ; i < dinnerGuast.length ; i++)
{

    console.log(`Dear ${dinnerGuast[i]}, you are invited to dinner please join us!`);
}