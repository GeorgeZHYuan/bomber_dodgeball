#pragma strict

public var moveSpeed : float = 6;
public var turnSpeed : float = 200;
public var gravity : float = 20;
public var object : Transform;
private var controller : CharacterController;
private var moveDirection : Vector3 = Vector3.zero;
private var fallDirection : Vector3 = Vector3.down;
static var enable : boolean = true;

function Start () {
	controller = GetComponent (CharacterController);
}


function Update () {
	controller.SimpleMove(fallDirection * gravity * Time.deltaTime);
	moveDirection = transform.forward;
	
	if (Control.gameIsRunning == true){
		enable = true;
	}	
	else{
		enable = false;
	}
	
	if (enable == true){
		if (Input.GetButton("Player4LeftTurn")){
			transform.Rotate (Vector3.down * turnSpeed * Time.deltaTime);
		}	
		if (Input.GetButton("Player4RightTurn")){
			transform.Rotate (-Vector3.down * turnSpeed * Time.deltaTime);
		}
		
		if (Input.GetButton("Player4Forward")){	
			controller.Move(moveDirection * moveSpeed * Time.deltaTime);
			object.animation.Play("run");
		}
		else if (Input.GetButton("Player4Backward")){
			controller.Move(-moveDirection * moveSpeed * Time.deltaTime);
			object.animation.Play("run");
		}		
		else{
			object.animation.Play("idle");
		}
	}	
}





