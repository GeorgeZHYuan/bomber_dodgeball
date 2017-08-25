public var Bomb : Rigidbody;
public var shooter : Transform;
public var deathSpawn : Transform;
public var spawn : Transform;

public var shootPower : int;
public var bombAmmo : float = 0;

function Update (){

	if (bombAmmo >= 2){
		bombAmmo = 2;
		gameObject.tag = "Occupied";
	}
	else {
		gameObject.tag = "Pickup";
	}
	
    if(Control.playerShoot == true && Control.gameIsRunning == true && Input.GetButtonDown("Player2Bomb") && bombAmmo > 0){
    	ShootBomb();
    }
}

function ShootBomb (){
    	bombAmmo -= 1;
        var bombLocation : Rigidbody;
        bombLocation = Instantiate(Bomb, shooter.position, shooter.rotation);
        bombLocation.AddForce(shooter.forward * shootPower);
        bombLocation.AddForce(shooter.up * shootPower/10);
}

function GetBomb (bombAmount : float){
	bombAmmo += bombAmount;
}

function death (){
	Control.playerCount -= 1;
	bombAmmo = 0;
	transform.position = Vector3(deathSpawn.position.x, deathSpawn.position.y, deathSpawn.position.z);
}

function Respawn (){
	transform.position = Vector3(spawn.position.x, spawn.position.y, spawn.position.z);
}
