function stringModification3(N,str) {
      var end = 3; //3
      var bag = "";
      while(end<=N){ //
          bag+=str[end-1]+str[end-2]+str[end-3];
          //cbafedihg
          end = end+3; // 12
          
      }  
      console.log(bag);
      
    }
    
    stringModification3(9, "cbafedihg")