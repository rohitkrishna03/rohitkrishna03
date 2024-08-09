// reversenumber

function revnumb(n)
{
n = n + " ";
return n.split("").reverse().join("");
}
console.log(Number(revnumb(3456)));