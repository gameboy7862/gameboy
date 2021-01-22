/* 과정명 */
var course_name ="간호윤리";

/* 순차,비순차 학습제어설정 */
var orderActive = true; //순차 학습일때 " false ", 비순차 학습일때 " true " 로 설정

/* Main 페이지 Size */
var swfWidth=1000; 
var swfHeight=650;


//숫자 정리
function itostr(inum){
    return(inum<10?("0"+inum):(inum));
}




//페이지 이동
temp_loca = location.href.split("/");
c=parseInt(temp_loca[temp_loca.length-2].substr(0,2),10);
p=parseInt(temp_loca[temp_loca.length-1].substr(6,2),10);

//다음차시 이동
function onEnd(){
	//프로토에서만 전차시 버전 시 아래 함수 호출로 변경할 것
	alert("마지막 페이지 입니다.")
	//nextpage();
}
//이전차시 이동
function onStart(){
	//프로토에서만 전차시 버전 시 아래 함수 호출로 변경할 것
	alert("첫번째 페이지 입니다.")
	//prevpage();
}

function movePage(sub,mNum,nPage){		
	//var goPage=sub+"_"+itostr(mNum)+"_"+itostr(nPage)+".html";	
	//alert(parseInt(nPage,10))
	//movepage1(c,parseInt(nPage,10))
	jumpPage(parseInt(nPage,10))

}

/* 컨텐츠내 점프메뉴 함수 */
function jumpPage(pName){
	var pageNum = pName; //이동할 페이지 정보 값
	if(orderActive){ //순차인지 비순차인지 확인하여 페이지 이동 제어
			movepage1(c,pName)
		//document.location=itostr(pageNum)+".html";
	} else {
		if(parent.getLearnJumpFlag(pageNum)) { //LMS에서 이동할 페이지가 학습 유무를 확인
				movepage1(c,pName)
		//document.location=itostr(pageNum)+".html";
		} else {
			alert("학습은 순차적으로 진행 됩니다");
		}
	}
}

function movepage1(c,p) {
	if (!pageinfo[c][p][2]) {
		alert("존재하지 않는 페이지입니다.");
	}
	else {
		//location.href="../"+pageinfo[c][p][2]+"?pageinfo="+pageinfo[c][p][0]+pageinfo[c][p][1];
    	next_page = pageinfo[c][p][2];
		top.navi_frame.FnNextMove(next_page); //실제 LMS에서 사용
	}
}


/* 진도체크 함수 */
function page_load(){
	var pageNum = p; //현재 페이지 정보값
	var chapNum = c; //현재 차시 정보값
	var totalNum = pageinfo[c].length-1; //현재 차시 총 페이지 정보값
	//alert("현재 차시: "+chapNum+"현재 페이지: "+pageNum+" 총페이지: "+ totalNum);
	parent.progress(pageNum, totalNum); // SLP 진도반영
}


/* 의견저장하기 */
function opinionWrite(no, content){ // no = 의견저장 순번, content = 의견 입력한 내용
alert(content)
	parent.opinion_write(no, content);

}

/* 다른사람의견보기 */
function opinionView(no) { // no = 의견저장 순번

	parent.opinion_view(no);

}



//플래쉬 불러오기
function flashCall(sub,module,totalPage,nowPage){
	
	var url="include/main.swf";
	var w=1000;
	var h=650;
	var id="rmp_Flash";
	var bg="#ffffff";
	var win="transparent";
	//var flvUrl="rtmp://subcontents.ollehslp.com/ex1729vol00/_definst_/0008135/PC/"; //미디어서버  동영상 url
var flvUrl="../../"+itostr(module)+"/"+"include/flv/"; //로컬 동영상 url
	var xmlUrl="../"+itostr(module)+"/"+"include/xml/"; //xml url
	var flashStr=
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='"+w+"' height='"+h+"' id='"+id+"' align='middle'>"+
	"<param name='allowScriptAccess' value='always' />"+
	"<param name='movie' value='"+url+"' />"+
	"<param name='FlashVars' value='sub="+sub+"&&module="+module+"&&totalPage="+totalPage+"&&nowPage="+nowPage+"&&flvUrl="+flvUrl+"&&xmlUrl="+xmlUrl+"' />"+
	"<param name='allowFullScreen' value='true' />"+
	"<param name='wmode' value='"+win+"' />"+
	"<param name='menu' value='false' />"+
	"<param name='quality' value='high' />"+
	"<param name='bgcolor' value='"+bg+"' />"+
	"<embed src='"+url+"' FlashVars='sub="+sub+"&&module="+module+"&&totalPage="+totalPage+"&&nowPage="+nowPage+"&&flvUrl="+flvUrl+"&&xmlUrl="+xmlUrl+"' allowFullScreen='true' wmode='"+win+"' menu='false' quality='high' bgcolor='"+bg+"' width='"+w+"' height='"+h+"' name='"+id+"' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />"+
	"</object>";
	// 플래시 코드 출력
	document.write(flashStr);
}



pageinfo=new Array();
for(i=1;i<=20;i++){
	pageinfo[i]=new Array();}

pageinfo[01][1]=new Array("","","sb_"+itostr(01)+"_"+itostr(1)+".html");
pageinfo[01][2]=new Array("","","sb_"+itostr(01)+"_"+itostr(2)+".html");
pageinfo[01][3]=new Array("","","sb_"+itostr(01)+"_"+itostr(3)+".html");
pageinfo[01][4]=new Array("","","sb_"+itostr(01)+"_"+itostr(4)+".html");
pageinfo[01][5]=new Array("","","sb_"+itostr(01)+"_"+itostr(5)+".html");
pageinfo[01][6]=new Array("","","sb_"+itostr(01)+"_"+itostr(6)+".html");
pageinfo[01][7]=new Array("","","sb_"+itostr(01)+"_"+itostr(7)+".html");
pageinfo[01][8]=new Array("","","sb_"+itostr(01)+"_"+itostr(8)+".html");
pageinfo[01][9]=new Array("","","sb_"+itostr(01)+"_"+itostr(9)+".html");
pageinfo[01][10]=new Array("","","sb_"+itostr(01)+"_"+itostr(10)+".html");
pageinfo[01][11]=new Array("","","sb_"+itostr(01)+"_"+itostr(11)+".html");
pageinfo[01][12]=new Array("","","sb_"+itostr(01)+"_"+itostr(12)+".html");
pageinfo[01][13]=new Array("","","sb_"+itostr(01)+"_"+itostr(13)+".html");
pageinfo[01][14]=new Array("","","sb_"+itostr(01)+"_"+itostr(14)+".html");
pageinfo[01][15]=new Array("","","sb_"+itostr(01)+"_"+itostr(15)+".html");
pageinfo[01][16]=new Array("","","sb_"+itostr(01)+"_"+itostr(16)+".html");
pageinfo[01][17]=new Array("","","sb_"+itostr(01)+"_"+itostr(17)+".html");
pageinfo[01][18]=new Array("","","sb_"+itostr(01)+"_"+itostr(18)+".html");
pageinfo[01][19]=new Array("","","sb_"+itostr(01)+"_"+itostr(19)+".html");
pageinfo[01][20]=new Array("","","sb_"+itostr(01)+"_"+itostr(20)+".html");


function popdown(n){
	window.open("../"+n+"/include/down/down_"+n+".zip");
}

function repop(){
	x='1000';
	y='650';
	SubOnPop = window.open("repop/sb_12_09.html", "" ,"toolbar=no, menubar=no, scrollbars=no, resizable=no, width="+x+", height="+y+", status=no,top==100, left=100");
	SubOnPop.focus();
}
//하단 네비게이션 버튼 제어 관련 
function jindoCompleteChk(){
var jindoStr = "0"; // "0" = 학습 미완료 상태, "1" = 학습 완료상태  
 
$.ajax({
   type: "POST",
   url: "/study/ProgressCheck.aspx",
   async: false,       
   data: "chapterNo=0101",                  
   success: function(current_study_frame){
if (current_study_frame > p || current_study_frame ==  pageinfo[c].length-1)
{
  jindoStr = 1;
  return jindoStr;
}
           }
});
return jindoStr;
}        
 
//하단 네비게이션 버튼 제어 관련 끝
