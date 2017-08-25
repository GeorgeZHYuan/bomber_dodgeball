#pragma strict
public var time : float;
public var maxTime : float;
public var spawnItem : Rigidbody;
public var spawnPlace : Transform;
public var bombAmount : float = 1;
private var start : boolean = true;

time = Random.Range(2, 5);
maxTime = time*2;

function Update (){
	
	if (time < maxTime && start == true){
		time += 1 * Time.deltaTime;
	}
	if (time > maxTime){
		time = maxTime;
	}
    if(time == maxTime){
        var bombLocation : Rigidbody;
        bombLocation = Instantiate(spawnItem, spawnPlace.position, spawnPlace.rotation);
        bombLocation.AddForce(spawnPlace.up * 1000);
        time = 0;
    }
}