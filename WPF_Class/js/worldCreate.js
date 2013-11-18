/**
 *
 *
 * Created by samanthaklindt on 11/18/13.
 *
 *
 */

function createWorld(){
    var world=[];

    for(o=0;o<10;o++){
        world[o]=[];
        for(i=0;i<10;i++){
            //I want to choose between 4 random land types
            var landName=0;
            var monsterList=1;
            var landSelection = Math.ceil(4*Math.random());
            world[o][i]=[];
            if(landSelection==1){world[o][i][landName]='Swamp';}
            else if(landSelection==2){world[o][i][landName]='Desert';}
            else if(landSelection==3){world[o][i][landName]='Mountain';}
            else (world[o][i][landName]='Forest');
            world[o][i]=[monsterList]= monsterGen(world[o][i][landName]);
        }
    }

    return world;

}


function monsterGen(landType){
    //create an array of monsters for our world
    //select monsters appropriate for land type.
    //conditional to check land types
    //randomly assign monsters to each land location
    var randomEvent=Math.random();
    var monsterArray=[];
    if(landType=='Forest'){
        //bugbears (50%), kobolds (40%), dragons(10%)
        if(randomEvent<.25){
            if(randomEvent<.125){
                monsterArray[0]='Bugbears'
            }else if(randomEvent<.225){
                monsterArray[0]='Kobolds'
            }
            else{monsterArray[0]='Dragons'}
        }
    }
    return monsterArray;
}


//hw: extend the monsters for each land type, add display if needed, test, and finish!



