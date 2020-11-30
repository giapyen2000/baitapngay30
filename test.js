//boolean
var a = 7,
    b = 9;
console.log(Boolean(7 < 9));
test = (a > 7) ? "true" : "false";
console.log(test);
//dieu kien
var hour = 15;
var greeting = null;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);
var thu=2;
switch (thu) {
    case 0:
        console.log("hom nay la thu 2");
        break;
    case 1:
        console.log("hom nay la thu 3");
        break;
    case 2:
        text=("hom nay la thu 4");
        break;
    case 3:
        text=("hom nay la thu 5");
        break;
    case 4:
        text=("hom nay la thu 6");
        break;
    case 5:
        text=("hom nay la thu 7");
        break;
    case 6:
        text=("hom nay la chu nhat");
        break;
    default:
        text=("khong co thu ban can tim");

}
console.log(text);