//获取历史输入区域的内容
function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=num;
	}	
}
//获取键盘输入
document.onkeyup=function(event){
	var e = event ? event : window.event;
	if(e.keyCode==67){//按“c”清除所有数据
	  printHistory("");
	  printOutput("");
	}else if(e.keyCode==8){
		var output=getOutput().toString();
		if(output){//if output has a value
			output= output.substr(0,output.length-1);
			printOutput(output);
		}
	}else if((e.keyCode>=96&&e.keyCode<=105)){
		var output=getOutput();
		if(output!=NaN){ //if output is a number
			output=output+(e.keyCode-96);//e.keyCode-96从ascii到数字
			printOutput(output);
		}
	}else if(e.keyCode==110){
		var output=getOutput();
		if(output!=NaN){ //if output is a number
			output=output+".";
			printOutput(output);
		}
	}else if(e.keyCode==57){
		var output=getOutput();
		if(output!=NaN){ //if output is a number
			output=output+"(";
			printOutput(output);
		}
	}else if(e.keyCode==48){
		var output=getOutput();
		if(output!=NaN){ //if output is a number
			output=output+")";
			printOutput(output);
		}
	}else{
		var output=getOutput();
		var history=getHistory();
		if(output==""&&history!=""){
			if(isNaN(history[history.length-1])){
				history= history.substr(0,history.length-1);
			}
		}
		if(output!="" || history!=""){
			history=history+output;
			if(e.keyCode==13){
				var result=eval(history);
				printOutput(result);
				printHistory("");
			}
			else if(e.keyCode==107){
				history=history+"+";
				printHistory(history);
				printOutput("");
			}else if(e.keyCode==109){
				history=history+"-";
				printHistory(history);
				printOutput("");
			}else if(e.keyCode==106){
				history=history+"*";
				printHistory(history);
				printOutput("");
			}else if(e.keyCode==111){
				history=history+"/";
				printHistory(history);
				printOutput("");
			}
		}
	}
};
//操作符
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=getOutput().toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					if(this.id=="pow"){
					history="Math.pow("+output+",";
					printHistory(history);
					printOutput("");	
					}
					else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
					}
				}
			}
		}
		
	});
}
//数字
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=getOutput();
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
//专业计算
var compoperator = document.getElementsByClassName("compoperator");
for(var i =0;i<number.length;i++){
	compoperator[i].addEventListener('click',function(){
		var output=getOutput();
        var history=getHistory();
		if(output!=NaN){ //if output is a number
			history=history+"Math."+this.id+"("+output+")"+"+";
            printHistory(history);
			printOutput("0");
		}
	});
}
