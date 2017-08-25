public var countdown : float = 1;

function Update () {
	var bombLocation : Transform;

    
	countdown -= Time.deltaTime;
       if(countdown <= 0){
       		Destroy(gameObject);
       }
}