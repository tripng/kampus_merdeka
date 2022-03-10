$(document).ready(function(){
    for(let i=1; i<=3; i++){
        $(`button:nth-child(${i})`).click(function(){ 
            $(`.content.${i}`).slideToggle("click");
            for(let j=1; j<=3; j++) if (j!=i) $(`.content.${j}`).css("display","none");
        });
    }
});