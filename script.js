

$(window).ready(function(){

    const $textarea = $("#textarea-1");
    
    const $div_choseong = $("#choseong");
    const $div_jungseong = $("#jungseong");
    const $div_jongseong = $("#jongseong");
    const $div_bangjeom = $("#bangjeom");

    // U+1100 ~ U+115E

    [
	"ᄀᄁᄏᅚ",
	"ᄂᄓᄔᄕᄖᅛᅜᅝ",
	"ᄃᄄᄐᄗᅞ",
	"ᄅᄘᄙᄚᄛ",
	"ᄆᄜᄝ",
	"ᄇᄈᄑᄞᄟᄠᄡᄢᄣᄤᄥᄦᄧᄨᄩᄪᄫᄬᅖᅗ",
	"ᄉᄊᄭᄮᄯᄰᄱᄲᄳᄴᄵᄶᄷᄸᄹᄺᄻᄼᄽᄾᄿᅀ",
	"ᄋᅁᅂᅃᅄᅅᅆᅇᅈᅉᅊᅋᅌ",
	"ᄌᄍᄎᅍᅒᅓᅎᅏᅐᅑᅔᅕ",
	"ᄒᅘᅙ",
    ].forEach(s => {
	const $div_temp = $("<div></div>", {style: "margin-bottom: 5px;"});
	s.split("").forEach(c => {
	    const $btn = $("<button></button>",
			   {
			       "class": "button-hangul",
			       text: c,
			       on: {
				   click: function(){
				       const text = $textarea.val();
				       $textarea.val(text + c);
			       }
			       }
			   }
			  );
	    $div_temp.append($btn);
	});
	$div_choseong.append($div_temp);
    });

    
    // U+1161 ~ U+11A7
    for(let code=0x1161; code<=0x11A7; ++code){
	const $btn = $("<button></button>",
		       {
			   "class": "button-hangul",
			   text: String.fromCharCode(code),
			   on: {
			       click: function(){
				   const text = $textarea.val();
				   $textarea.val(text + String.fromCharCode(code));
			       }
			   }
		       }
		      );
	$div_jungseong.append($btn);
    }

    // U+11A8 ~ U+11FF

    [
	"ᆨᆩᆪᆿᇃᇄᇺᇻᇼᇽᇾ",
	"ᆫᆬᆭᇅᇆᇇᇈᇉᇿ",
	"ᆮᇀᇊᇋ",
	"ᆯᆰᆱᆲᆳᆴᆵᆶᇌᇍᇎᇏᇐᇑᇒᇓᇔᇕᇖᇗᇘᇙ",
	"ᆷᇚᇛᇜᇝᇞᇟᇠᇡᇢ",
	"ᆸᆹᇁᇣᇤᇥᇦᇳᇴ",
	"ᆺᆻᇧᇨᇩᇪᇫ",
	"ᆼᇰᇬᇭᇮᇯᇱᇲ",
	"ᆽᆾ",
	"ᇂᇵᇶᇷᇸᇹ",
	
    ].forEach(s => {
	const $div_temp = $("<div></div>", {style: "margin-bottom: 5px;"});
	s.split("").forEach(c => {
	    const $btn = $("<button></button>",
			   {
			       "class": "button-hangul",
			       text: c,
			       on: {
				   click: function(){
				       const text = $textarea.val();
				       $textarea.val(text + c);
			       }
			       }
			   }
			  );
	    $div_temp.append($btn);
	});
	$div_jongseong.append($div_temp);
    });
    

    // U+302E, U+302F
    for(let code=0x302E; code<=0x302F; ++code){
	const $btn = $("<button></button>",
		       {
			   "class": "button-hangul",
			   text: String.fromCharCode(code),
			   on: {
			       click: function(){
				   const text = $textarea.val();
				   $textarea.val(text + String.fromCharCode(code));
			       }
			   }
		       }
		      );
	$div_bangjeom.append($btn);
    }


    // canvas
    const canvas = document.getElementById("canvas-1");
    const ctx = canvas.getContext("2d");

    canvas.width = $textarea.width();
    canvas.height = $textarea.height();

    $textarea.focusout(function(){
	drawHangul();
    });

});

function drawHangul(){
    const $textarea = $("#textarea-1");
    const canvas = document.getElementById("canvas-1");
    const ctx = canvas.getContext("2d");
    
    const font_size = $textarea.css("font-size");
    const line_height = $textarea.css("line-height");
    
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "black";
    ctx.font = `${font_size} 'Noto Sans KR'`

    $textarea.val().split("\n").forEach(function(str,index){
	ctx.fillText(str, 0, parseInt(line_height)*(index+1));
    });
}
