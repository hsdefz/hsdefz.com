//---------------Ltrim(instr)����-----------------------
	 function Ltrim(instr)
	 {
		var str=instr+"";
		if (str.length==0){
			return str;
		}
		var i=0;
		while ((i<str.length)&&(str.substring(i,i+1)==" ")&&( i< 2000)) i++;
		return str.substring(i,str.length);
	 }
//--------------Rtrim(str)����-----------------------------
	 function Rtrim(str)
	 {
		var instr=str+"";
		var last_space;
		var ret;
		last_space = instr.length;
        var loop=0;
		while ((instr.charAt( last_space - 1 ) == " " )&&(last_space > 0)&&( loop< 2000)) {
          loop++;
		  last_space --;
		}
		if (last_space==0){
			return ""
		}else{
			return instr.substring( 0, last_space );
		}
	 }
//--------------------AllTrim(str)����----------------------------
 function AllTrim(str){
		return Rtrim(Ltrim(str));
	}       
//--------------replStr(str,str1,str2)����------------------
	function replStr(str,str1,str2)
	{									//���ַ���str�е������ַ���str1�滻���ַ���str2
		var sTmp=str+"";
		var res="";
		var ch="";
		var len=str1.length;
		var iStart=0;
		var iPos=0;
		while (iPos != -1){
			iPos=sTmp.indexOf(str1,iStart);
			if (iPos != -1){
				res=res+sTmp.substring(iStart,iPos)+str2;
				iStart=iPos+len;
			}else{
				if (sTmp.substring(iStart) !=null){
					res=res+sTmp.substring(iStart);
				}
				break;
			}
		}
		return isNull(res,"");
	}
//---------------isNull(obj,res)��������------------------
	function isNull(obj,res)
	{
		if ((obj==null)||(obj=="null")) return res;
		else return obj;
	}
//----------------Split(nn,str,ch)����------------------
	function split(nn,str,ch)
	{							//split string [str] by char [ch], return a array [nn]
		if (str.length > 0){    //when use at server side
		   var ipos=0;         //when use at browser side just call str.split("`")
		   var istart=0;
		   var i=0;
		   while (true){
			   ipos=str.indexOf(ch,istart);
			   if (ipos==-1){
				   nn[i]=str.substring(istart,str.length);
				   if (nn[i]==null){
					   nn[i]="";
				   }
				   return;
			   }
			   nn[i]=str.substring(istart,ipos);
			   if (nn[i]==null){
				   nn[i]="";
			   }
			   i++;
			   istart=ipos+1;
		   }
		}
	 }
//--------------getToday(ch)����-------------------------------
	function getToday(ch)
	{
		var now=new Date();
		var res=getMonDay((now.getMonth()+1),now.getDate(),ch);
		var i=now.getYear();
		if (i<1000){
			if (i<70){
				i=i+2000;
			}else{
				i=i+1900;
			}
		}
		return i+ch+res;
	}	 	
//----------------isNumeric(str)����------------------------
function isNumeric(str)
{
	var i=0;
	var j=0;
	while(i<=str.length-1){
		str1=str.charAt(i);
		if (str1=='.'){
			if ((j>0)||(i==0)||(i==(str.length-1))||(i>=2&&i<(str.length-1)&&parseInt(str.substring(0,i))==0))
				return false;
			j=j+1;
		}
		else if(isNaN(parseInt(str1))==true) return false;
		i=i+1;
	}
	return true;
}	

//-------------------------��������������Ԫ��--------------------------
function ClearAll(FmName,SelName)
{
  var count,i,j;
  var obj;
  j	= 0;
  eval("obj=document."+FmName+"."+SelName);	
  count	= obj.length;
  for(i=0;i<count;i++)
  {
	obj.options[i] = null;
	i =	i -	1;
	j =	j +	1;
	if(j==count) break;
  }
}	 

//--------------------------�����б��е�Ԫ��-----------------------------
function SetList(sValue,sText,FmName,SelName,sColor)
{
  var obj;
  var oOption;
 
  eval("obj=document."+FmName+"."+SelName);
  if (sValue.length>0)
  {	 
	oOption	= new Option();
	oOption.text = sText;
	oOption.value =	sValue;
	oOption.style.color = sColor;
	obj.options[obj.length]	= oOption;
  }		
} 

//--------------------------ɾ���б��е�Ԫ��-----------------------------
function RemoveItem(FmName,SelName)
{
   var objSource;		
   eval("objSource=document."+FmName+"."+SelName); 
   var i = 0;
     if(objSource.length == 0) return;
     for(i = 0;i < objSource.length;i++)
     {
       if(objSource.options[i].selected == true)
        {
	  objSource.options[i] = null;
	  i--;
	}
     }
}

//--------------------------�ж�ȫ�ǿո�--------------------------------
function IsAllSBCBlank(sString)
{
	var sTemp;
	var nResult = 0;
	
	var nLen = sString.length;
	if(nLen == 0)
	{
		return false;
	}	
		
	for(var i = 0;i<nLen;i++)
	{
		sTemp = sString.substring(i,i+1);
		if(sTemp.charCodeAt() == 12288)   //ȫ�ǿո�
		{
			nResult = nResult + 1;
		}
	}
	if(nResult == nLen)
		return true;
	else
		return false;	
}

//���´���
function ShowOneInfo(sInfoPath)
	{
		var width,height,top,left;
		var nScreenWidth,nScreenHeigh;
		
		nScreenWidth = screen.width;
		nScreenHeigh = screen.height;
		
		if(nScreenWidth < 1000)
		{
			width =	720;
			height = 380;
		}
		else
		{
			width =	750;
			height = 500;
		}	
		
		left = (nScreenWidth - width) / 2;
		top = (nScreenHeigh - height) / 2;
		//window.open(sInfoPath,'newWindow','toolbar=0,status=0,menubar=0,resizable=1,scrollbars=1,width='+width+',height='+height+',left='+left+',top='+top);
		window.open(sInfoPath,'','toolbar=0,status=0,menubar=0,resizable=1,scrollbars=1,width='+width+',height='+height+',left='+left+',top='+top);
	}

//��ʾ��ʽ(��ʾor����)
function PartShowStyle(sIFrameTableId,sStyleName)
{
	try
	{	
		eval("window.parent.document.all('" + sIFrameTableId + "').style.display='" + sStyleName + "'");
	}
	catch(e)
	{}	
}


//ҳ����ת�������(��Ϣ����ҳ����ʾ)
function PageTurnTo(nPageCount,sURL)
{
	var nPage = document.all("InputInfoPage").value;
	if(isNumeric(nPage) && nPage != "")
	{
		nPage = parseInt(nPage);
	}
	else
	{
		window.alert("���������0������!");
		return;   
	}
	
	if(nPage <= 0)
	{
		window.alert("���������0������!");
		return;
	} 
	if(nPage > nPageCount)
	{
		window.alert("���������ҳ��ֵ!");
		return;
	}
	
	window.location.href = sURL+"&CurrentPage="+nPage;
}

//ҳ����ת�Իس����Ĵ���
function PageKeyPress(nPageCount,sURL)
{
	if(window.event.keyCode == 13)
	{
		PageTurnTo(nPageCount,sURL);
		window.event.returnValue = false;
		window.event.cancelBubble = true;
	}	
}