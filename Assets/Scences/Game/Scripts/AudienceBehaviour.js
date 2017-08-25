#pragma strict
var object : Transform;
private var number : int;
private var idleChance : int;
idleChance = Random.Range(6,20);

function Update (){
	newMove();
}

function newMove (){
	
	if (!animation.isPlaying){				
		number = Random.Range(1, idleChance);

		if (number == 1){
			object.animation.Play("applause");
		}
		else if (number == 2){
			object.animation.Play("applause2");
		}
		else if (number == 3){
			object.animation.Play("celebration");
		}
		else if (number == 4){
			object.animation.Play("celebration2");
		}
		else if (number == 5){
			object.animation.Play("celebration3");
		}
		else {
			object.animation.Play("idle");
		}
	}
}