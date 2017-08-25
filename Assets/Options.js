#pragma strict


function OnGUI (){
	GUI.backgroundColor = Color.black;
	GUI.contentColor = Color.white;
	GUI.Box(Rect(Screen.width/2 - 150, Screen.height/2 -150, 300, 300),"BOMBER GAME");

	if (GUI.Button(Rect(Screen.width/2 - 50, Screen.height/2 - 80, 100, 40), "Play")){
		Application.LoadLevel("Bomber");
	}
	if (GUI.Button(Rect(Screen.width/2 - 50, Screen.height/2 - 20, 100, 40), "Quit")){
		Application.Quit();
	}		
}

