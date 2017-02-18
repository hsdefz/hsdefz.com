/********************************************************************
//
//	Copyright Shanghai Intranet Corporation.  All Rights Reserved.
//
//	File		:				include.js
//	Summary	:				include all the eofficelib module files
//	Version	:				1.0.0001
//
//	Remark	:			

//	Edit History:		
//			2002/4/24		[Paranoid]			created this file
//
//	Modify Note	:		editing this module must add the edit history and 
//									increase the version number first.
//
//	Relative file:	
//
//******************************************************************/
var pathToRoot = "/EOPub/"
document.write('<SCRIPT type="text/javascript" src="' + pathToRoot + 'include.js"></SCRIPT>');

var g_sEofficeUrl =window.location.href
var g_nPos =0
if (window!=top){
	try{
		var g_sTopUrlTemp=top.location.href;
		
	}catch(e){
	
		g_nPos=g_sEofficeUrl.search(/\/\//);
		g_sEofficeUrl=g_sEofficeUrl.substr(g_nPos+2);
		
		g_nPos=g_sEofficeUrl.search(/\//);
		g_sEofficeUrl=g_sEofficeUrl.substr(g_nPos+1);
		
		g_nPos=g_sEofficeUrl.search(/\//);
		g_sEofficeUrl=g_sEofficeUrl.substr(0,g_nPos);
		window.navigate("/" + g_sEofficeUrl + "/iiserror/404.htm" );
	}
}

