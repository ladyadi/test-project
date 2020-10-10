var room = "dining room";
var suspect = "Colonel Mustard";

var weapon = "";
var solved = false;

if (room == "dining room" && suspect == "Colonel Mustard") {
    weapon = "knife";
    solved = true;
} else if (room == "billiards room" && suspect == "Mrs. Peacock") {
    weapon = "pool stick";
    solved = true;
} else if (room == "gallery" && suspect == "Professor Plum") {
    weapon = "trophy";
    solved = true;
} else if (room == "ballroom" && suspect == "Miss Scarlett") {
    weapon = "poison";
    solved = true;
} else {
    solved = false;
}

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
