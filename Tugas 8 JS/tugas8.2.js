$(document).ready(function(){
    for(let i=1; i<=4; i++){
        $(`.card.${i}`).click(function(){
            $(`.card.${i}`).css({
                'background' : `url(asset/animal${i}.jpg)`,
                'background-size':'cover'
            });
            $(`.card.${i} p`).css({'display':'none'});
            $(`audio.${i}`).trigger("play");
            for(let j=1; j<=4; j++){
                if(j!=i){
                    $(`audio.${j}`).trigger("pause");
                    $(`.card.${j}`).css({'background' : `rgba(0, 0, 0, .4)`});
                    $(`.card.${j} p`).css({'display':'block'});
                } 
            }
        });
    }
});