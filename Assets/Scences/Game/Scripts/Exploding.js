public var explosion : GameObject;
public var Bomb : Transform;
public var countdown : float;


function Update (){
	countdown -= Time.deltaTime;    
	if(countdown <= 0){   	 
         var bombLocation : GameObject;
         bombLocation = Instantiate(explosion, Bomb.position, Bomb.rotation);
         Destroy(gameObject);
    }
}
function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag != ("Indestructible")){
		 bombLocation = Instantiate(explosion, Bomb.position, Bomb.rotation);
         Destroy(gameObject);
	}
}