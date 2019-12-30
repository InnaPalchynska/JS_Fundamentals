let stroka="aabbbBcddddde";
    function Solution(ST){
      let k=ST.length;
      let sovpadenie=0;
      let arraySolution=Array();
      let bukva1="";
      let bukva2="";
      let kolvo=0;
      for (let i=0;i<=(k-1);i++){
        bukva1 = ST[i];       
        for(let x=0;x<=(k-1);x++){
            bukva2 = ST[x];
            if(bukva1===bukva2){
                kolvo++;
            }
        }
        for(let b=0;b<i;b++){
            if(ST[i]===ST[b]){sovpadenie=1;}
        }
        if(sovpadenie===1){
            sovpadenie=0;
            kolvo=0;
            continue;
            }
        arraySolution.push([bukva1,kolvo]);
        sovpadenie=0;
        kolvo=0;
      }
      return arraySolution;
    }
    console.log(Solution(stroka));


    let stroka="ATTGC";
    function Solution(ST){
      let newST="";
      let x="";
      for(let i = 0; i < ST.length; i++ ){
        if(ST[i]==="A"){x="T";}
        if(ST[i]==="T"){x="A";}
        if(ST[i]==="C"){x="C";}
        if(ST[i]==="G"){x="G";}     
        newST=newST+x;
      }
      return newST;
    }
    console.log(Solution(stroka));

    let stroka="lets talk about javascript the best language";
    function Solution(S){
      let x=0;
      let y=0;
      for(let i = 0; i < S.length; i++){   
        if(S[i]===" "){
          if(y<x || x===0){
            x=y;   
          }
          y=-1;
        }
        y++;
      }
      return x;
    }
    console.log(Solution(stroka));

    let stroka="4of Fo1r pe6ople g3ood th5e the2";
    function Solution(S){
      let arrayWords=Array();
      let word="";
      let num=0;
      let newLine="";
      sl = S.length - 1;
      for( i=0; i<S.length ; i++){      
        word=word + S[i];
        if(S[i]===" " || (i===sl)){
          num=word.match(/\d+/);
          num=num[0];
          word = word.replace(" ","");
          arrayWords.push([word,num])
          word="";
        }
      }
      for(let x = 0; x < arrayWords.length ; x++){
        for(let y = 0; y < arrayWords.length ; y++){ 
          if(arrayWords[y][1] == x + 1){
            newLine=newLine+arrayWords[y][0]+" ";
          }
        }
      }
      return newLine;
    } 
    console.log(Solution(stroka));

