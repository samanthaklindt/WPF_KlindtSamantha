/**
 *
 *
 *
 *
 * Created by samanthaklindt on 11/6/13.
 */

//Building a World in a 10x10, with random land types.

//Build a world array to contain our world of random land types.

var world= [];

for(o=0;o<10;o++){
    world[o]=[];
    for(i=0;i<10;i++){
        //I want to chooose between 4 random land types
        var landSelection = Math.ceil(4*Math.random());
        if(landSelection==1){world[o][i]='Swamp\t\t';}
        else if(landSelection==2){world[o][i]='Desert\t\t';}
        else if(landSelection==3){world[o][i]='Mountain\t';}
        else (world[o][i]='Forest\t\t');

    }

    console.log(world[o]);
}



