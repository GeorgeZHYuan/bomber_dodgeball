#pragma strict

public var moveSpeed : float = 6;
public var turnSpeed : float = 200;
public var gravity : float = 20;
public var object : Transform;

private var moveDirection : Vector3 = Vector3.zero;
private var fallDirection : Vector3 = Vector3.down;
private var controller : CharacterController;
static var enable : boolean = true;

function Start () {
	controller = GetComponent (CharacterController);
	
}


function Update () {
	controller.SimpleMove(fallDirection * gravity * Time.deltaTime);
	moveDirection = transform.forward;
	
	if (Control.playerMove == true && Control.gameIsRunning == true){
		if (Input.GetButton("Player1LeftTurn")){
			transform.Rotate (Vector3.down * turnSpeed * Time.deltaTime);
		}	
		if (Input.GetButton("Player1RightTurn")){
			transform.Rotate (-Vector3.down * turnSpeed * Time.deltaTime);
		}
		
		if (Input.GetButton("Player1Forward")){	
			controller.Move(moveDirection * moveSpeed * Time.deltaTime);
			object.animation.Play("run");
		}
		else if (Input.GetButton("Player1Backward")){
			controller.Move(-moveDirection * moveSpeed * Time.deltaTime);
			object.animation.Play("run");
		}		
		else{
			object.animation.Play("idle");
		}
	}	
}



