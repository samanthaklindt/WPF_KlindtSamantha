/**
 * Created by samanthaklindt on 11/18/13.
 */

function createWorld(){
    var world=[];

    for(o=0;o<10;o++){
        world[o]=[];
        for(i=0;i<10;i++){
            //I want to choose between 4 random land types
            var landSelection = Math.ceil(4*Math.random());
            if(landSelection==1){world[o][i]='Swamp';}
            else if(landSelection==2){world[o][i]='Desert';}
            else if(landSelection==3){world[o][i]='Mountain';}
            else (world[o][i]='Forest');

        }
    }

    return world;

}
