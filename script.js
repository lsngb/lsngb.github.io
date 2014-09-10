//随机数
var ram_num=function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
//打印随机诗句
var print_example = examples[ram_num(0,examples.length-1)];
$('.example').html(print_example);


var get_user_input=function(){
	$('.note').html('请输入下列句子中<span style="color:#ff0000;font-weight:bold">所有的</span>入声字');


	//诗句去标点
	example_string=print_example.split(/，|。|！|？|“|”/).join("");
	//诗句转字符array
	var characters=example_string.split("");

	var example_rusheng=[];
	var not_example=[];
	var not_rusheng=[];
	var input_characters=[];

	//get user input
	var unprocessed_input=$('input:text').val();
	if (unprocessed_input.length===0){return;}
	unprocessed_input=unprocessed_input.split(/，| |,/).join("");
	//unprocessed user input convert to array
	var unprocessed_characters=unprocessed_input.split("");
	for(var i=0;i<unprocessed_input.length;i++){
		if(input_characters.indexOf(unprocessed_characters[i])<0){
			input_characters.push(unprocessed_characters[i]);
		}
	}

	for (var i=0;i<input_characters.length;i++){
		//find input not in example and put in not_example
		if (characters.indexOf(input_characters[i])<0){
			not_example.push(input_characters[i]);
		}
	}
	if (not_example.length != 0){
		//print a note
		$('.note').html("字符"+"<span style='font-weight:bold'>“"+not_example+"”</span>不在诗句中，请重新输入");
		$('.example').html(print_example);
		
		return;
	}

	for (var i=0;i<input_characters.length;i++){
		//找出user inut中not入声字and put in not_rusheng
		if (elements.indexOf(input_characters[i])<0){
			not_rusheng.push(input_characters[i]);
		}
	}
	if (not_rusheng.length!=0){
		//print a note
		$('.note').html("字符"+"<span style='font-weight:bold'>“"+not_rusheng+"”</span>不是入声字，请重新输入");
		$('.example').html(print_example);
		return;
	}
	//go through 诗句
	for (var i=0;i<characters.length;i++){
		//找出诗句中的入声字and put in example_rusheng
		if (elements.indexOf(characters[i])+1>0 && example_rusheng.indexOf(characters[i])<0){
			example_rusheng.push(characters[i]);
		}
	}
	if (input_characters.length==example_rusheng.length){
		$('.note').html("<span style='font-weight:bold'>↖(^ω^)↗答案正确！请继续</span>");
		$('input:text').val("");
		print_example = examples[ram_num(0,examples.length-1)];
		$('.example').html(print_example);
	}
	else {
		$('.note').html("你没有找到所有的入声字，请继续尝试");
	}
}