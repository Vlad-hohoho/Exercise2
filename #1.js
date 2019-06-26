<script>
  var v, d, box[100], co =1, j, i, m, q, z, bb, ff;
  console.log("Please, enter a integer number \n");
  d = promt(,0);
  v=d;
  for (i = 0; i < co;)
  {
    if (v > 10){
        j++;
        q=v/10; 
        box[j]=v-q*10;
        v=v/10;
    } else { 
        j++;
        box[j]=v;
        i++;
    }
  }
 z=box[j];
  for ( int i = 1; i <= j-1; i++){
for(ff=1; ff<i; ff++){
bb*=10;
      z = z + box[j-i] * bb;
          }
                if (i=j){
          if(z!=d){
              alert("false");
          } else { 
              alert("true");
          }
      }
</script>
