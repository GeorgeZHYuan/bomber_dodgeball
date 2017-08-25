#pragma strict
static var Keepers : boolean;
static var gameIsRunning : boolean = true;
static var playerShoot : boolean = true;
static var playerMove : boolean = true;

static var playerCount : int = 4;

public var boundary : GameObject;
public var DodgeBalls : GameObject;

private var endCount : int;

function Start (){
	endCount = playerCount;
	gameIsRunning = true;
	SetGameMode();
}

function OnGUI (){
	
	GUI.backgroundColor = Color.black;
	if (GUI.Button(Rect(Screen.width - 75,Screen.height -35 , 70, 30), "Pause")){
		gameIsRunning = false;
		playerShoot = false;
	}
	
	if (gameIsRunning == false){
		GUI.contentColor = Color.white;
		GUI.Box(Rect(Screen.width/2 - 150, Screen.height/2 -250, 300, 500),"Game Paused");
		
		if (GUI.Button(Rect(Screen.width/2 - 50, Screen.height/2 - 140, 100, 40), "Restart")){
			Application.LoadLevel("Bomber");
			gameIsRunning = true;
			playerCount = endCount;
			
		}		
		if (GUI.Button(Rect(Screen.width/2 - 50, Screen.height/2 - 80, 100, 40), "Resume")){
			gameIsRunning = true;
			playerShoot = true;
		}
		if (GUI.Button(Rect(Screen.width/2 - 50, Screen.height/2 - 20, 100, 40), "Quit")){
			Application.LoadLevel("TitlePage");
		}		
	}
}

function Update () {
	if (playerCount < 2 && endCount > 1){
		// Application.LoadLevel("Bomber");
		SetGameMode();
		playerCount = endCount;
	}

	if (Input.GetKeyDown(KeyCode.P)){
		gameIsRunning = !gameIsRunning;
	}
}

function SetGameMode (){
	var gameMode : int;
	gameMode = Random.Range(1, 2);
	
	//Dodgeball
	if (gameMode == 1){		
		boundary.collider.enabled = true;
		DodgeBalls.collider.enabled = true;
		
		playerShoot = true;
		
		Keepers = false;			
	}
	//SurvDogdeBall
	else if (gameMode == 2){
		boundary.collider.enabled = false;
		DodgeBalls.collider.enabled = false;
		
		playerShoot = true;
		
		Keepers = false;			
	}
	//Survivor
	else if (gameMode == 3){
		boundary.collider.enabled = false;
		DodgeBalls.collider.enabled = false;
		
		playerShoot = false;
		
		Keepers = false;		
	}
	//Keepers
	else if (gameMode == 4){
		boundary.collider.enabled = false;
		DodgeBalls.collider.enabled = false;
		
		playerShoot = false;
		
		Keepers = true;
	}
	//Upgrade
	else {

	}
	//player1.spawn;
}
