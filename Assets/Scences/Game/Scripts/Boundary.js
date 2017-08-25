#pragma strict
var boundary : Transform;

function OnTriggerEnter (other : Collider) {
	if (other.gameObject == "bomb"){
		boundary.collider.enabled = false;
	}
	else {
		boundary.collider.enabled = true;
	}
}