#pragma strict

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag != ("Indestructible")){
		other.SendMessage("death",SendMessageOptions.DontRequireReceiver);
	}
}