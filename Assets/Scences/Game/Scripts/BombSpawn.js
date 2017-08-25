#pragma strict
public var time : float = 10;
public var maxTime : float;
public var bombAmount : float = 1;
public var nozzle : Transform;
private var start : boolean = true;

function Update (){
	
	if (time < maxTime && start == true){
		time += 1 * Time.deltaTime;
	}
	if (time > maxTime){
		time = maxTime;
	}
    if(time == maxTime){
       time = 0;
        start = false;
        gameObject.renderer.enabled = true;
        nozzle.renderer.enabled = true;
    }
}

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag == ("Pickup")){
		other.SendMessage("GetBomb",bombAmount, SendMessageOptions.RequireReceiver);
		gameObject.renderer.enabled = false;
		nozzle.renderer.enabled = false;
		start = true;
	}
}