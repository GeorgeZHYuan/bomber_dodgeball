#pragma strict

public var spawnPlace : Transform;
public var Item1 : GameObject;
public var Item2 : GameObject;
public var Item3 : GameObject;
public var Item4 : GameObject;
public var Item5 : GameObject;
public var Item6 : GameObject;
private var spawnItem : GameObject;
private var number : int;
number = Random.Range(1, 6);

if (number == 1){
	spawnItem = Item1;
}
if (number == 2){
	spawnItem = Item2;
}
if (number == 3){
	spawnItem = Item3;
}
if (number == 4){
	spawnItem = Item4;
}
if (number == 5){
	spawnItem = Item5;
}
if (number == 6){
	spawnItem = Item6;
}

private var bombLocation : GameObject;
bombLocation = Instantiate(spawnItem, spawnPlace.position, spawnPlace.rotation);