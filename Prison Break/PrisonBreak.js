// PrisonBreak.js


var gaurds = ["Nick", "William", "Homer", "Marge", "Maggie"];
var disp = ["Piper", "Ronald", "Danny"];
var kStaff = ["Dan", "Sue", "Jason"];
var prisoners = ["Mr. Dahlem", "Robert", "Cait", "John", "Alice"];
var prisonersText = ["his", "his", "her", "his", "her"];
var roleCallList = ["Mr. Dahlem", "Robert", "Cait", "John", "Alice"];
var staff;
e1 = 0;

function escape() {
if (e1 == 0) {
	randPrisoner = Math.floor(Math.random() * 5);
	sneakPrisner = prisoners[randPrisoner];
	delete prisoners[randPrisoner];
	e1 = 1;
	}
}

function startFire() {
console.log("fireAlarm button pressed");
// merge staff
staff = gaurds.concat(disp, kStaff);
// escape random prisoner
escape();
// insert prisoner
rand = Math.floor(Math.random() * 13);
staff.splice(rand, 0, sneakPrisner);
// output
document.getElementById("output").innerHTML = "Everyone is trying to get out the door!";
setTimeout(function(){
document.getElementById("output").innerHTML = "<b>Getting out the door:</b><br>" + staff.join(", ");
document.getElementById("b2").innerHTML = '<input type="submit" value="Role Call" onclick="roleCall()">';
document.getElementById("outpris").innerHTML = "<b>Prisoners getting out the door:</b><br>" + prisoners.join(", ");
}, 750);
};
function roleCall() {
console.log("roleCall button pressed");
// sort staff
document.getElementById("output").innerHTML = "The staff is getting organized...";
setTimeout(function(){
	staff.sort();
	document.getElementById("output").innerHTML = "<b>Getting out the door:</b><br>" + staff.join(", ");

// find escaped prisoner
	document.getElementById("outesc").innerHTML = "Now we need to find the prisoner...";
	setTimeout(function(){
	pL = prisoners.length;
	for (i = 0; i < pL; i++) {
		if (prisoners[i]) {} else {escapeNo = i; break};
	};
	escapeName = roleCallList[escapeNo];
	document.getElementById("outesc").innerHTML = escapeName + " has escaped!";
	
	// retun prisoner
		setTimeout(function(){
		prisoners[escapeNo] = escapeName;
		escapeName2 = prisonersText[escapeNo];
		document.getElementById("outpris").innerHTML = "<b>Prisoners getting out the door:</b><br>" + prisoners.join(", ");
		document.getElementById("outesc").innerHTML = escapeName + " has been returned to "+ escapeName2 +" cell.";
		staff = gaurds.concat(disp, kStaff);
		staff.sort();
		document.getElementById("output").innerHTML = "<b>People who got out the door:</b><br>" + staff.join(", ");
		}, 1000);
	}, 2500);
}, 1500);

}