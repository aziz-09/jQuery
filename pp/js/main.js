function makebold()
{ if(document.getElementById("txt").style.fontWeight=="normal")
document.getElementById("txt").style.fontWeight="bold"
else{ document.getElementById("txt").style.fontWeight="normal"}
}

function makeitalic(){
 if(document.getElementById("txt").style.fontStyle=="normal")
 document.getElementById("txt").style.fontStyle="italic"
 else{document.getElementById("txt").style.fontStyle="normal"}
}

function makeunder(){
    if(document.getElementById("txt").style.textDecoration=="none")
    document.getElementById("txt").style.textDecoration="underline"
    else{document.getElementById("txt").style.textDecoration="none"}

}

function changeFontSize(fontSize){
    document.getElementById("txt").style.fontSize=fontSize.value+"px"
}
function changeFontFamily(fontFamily){
    document.getElementById("txt").style.fontFamily=fontFamily.value
}
$(".ttimg").hover(function(){
    $(this).css("opacity",0.5);
    $(this).find("button").show();
},function(){
    $(this).css("opacity",1);
    $(this).find("button").hide();
})
