#pragma strict

function OnGUI (){
		GUI.backgroundColor = Color.yellow;
		if (GUI.Button(Rect(Screen.width/2,Screen.height/2,70,30), "Play")){
			Application.LoadLevel("Bomber");
		}
}