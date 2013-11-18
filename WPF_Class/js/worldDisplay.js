/**
 * Created by samanthaklindt on 11/18/13.
 */

function worldDisplay(worldArray,xyz,yyy,charName){
    console.clear();
    //input world array from the creation
    //Make this into a formatted grid with even spacing
    charName= '*'+ charName.substring(0,6).toUpperCase()+'*';
    for (i=charName.length;i<=8;i++){charName += ' ';}


    var formattedResult='';
    for(i=0;i<worldArray.length;i++){
        for(j=0;j<worldArray[i].length;j++)
        {
            if(i==yyy &&j==xyz){ formattedResult+=charName}
            else{
                formattedResult+= worldArray[i][j] +' ';
                if(worldArray[i][j].length==0){formattedResult+='        '}
                if(worldArray[i][j].length==1){formattedResult+='       '}
                if(worldArray[i][j].length==2){formattedResult+='      '}
                if(worldArray[i][j].length==3){formattedResult+='     '}
                if(worldArray[i][j].length==4){formattedResult+='    '}
                if(worldArray[i][j].length==5){formattedResult+='   '}
                if(worldArray[i][j].length==6){formattedResult+='  '}
                if(worldArray[i][j].length==7){formattedResult+=' '}
            }        }
        formattedResult+='\n';
    }
    return formattedResult;

    //output the formatted version of the world array
}

