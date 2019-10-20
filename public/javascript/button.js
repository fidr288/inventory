const vaccines = ["flu","varilax","hepb","hib","rabies"];

for (i=0; i<vaccines.length; i++){
   document.querySelector("#"+ vaccines[i]).addEventListener("click", function(){
      console.log("is clicked");
   });
};

