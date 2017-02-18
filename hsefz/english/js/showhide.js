// JavaScript Document
function NewWinOpen(src,width,height,showScrollbar)

{
    window.open(src,"MyWin","height=" + height + ",width=" + width + ",top=0,left=0,toolbar=no,menubar=no,scrollbars=" + showScrollbar + ",resizable=yes,location=no,status=no")

}

function ShowHtml(objectName)

{
    if(document.all(objectName).style.display == "none")
    {
        document.all(objectName).style.display = "inline";
    }
    else
    {
        document.all(objectName).style.display = "none";
    }
}