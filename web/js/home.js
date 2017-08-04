function parser() {
	var res_url = document.getElementById("url_res");
	var in_mul = document.getElementById("in_mul");
	_compose = res_url.value.split("+");
	console.log(_compose[5])
	var U_compose = _compose[1];
	var M_compose = _compose[2];
	var set_up = _compose[3];
	var cal_res = _compose[4];
	var equa = _compose[5];
	if (!equa) {
		in_mul.innerHTML = "";
		MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	}
	var parser_res = "";
	for (i = 2; i < equa.length; i += 2) {
		parser_res += mapping(equa.slice(i, i+2));
	}
	in_mul.innerHTML = "$$" + parser_res + "$$";
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

function mapping(inner_key) {
	var map_dict = {
		"22" : "\\pi",
		"A6" : "+",
		"A7" : "-",
		"A8" : "{\\times}",
		"A9" : "{\\div}",
		"30" : "0",
		"31" : "1",
		"32" : "2",
		"33" : "3",
		"34" : "4",
		"35" : "5",
		"36" : "6",
		"37" : "7",
		"38" : "8",
		"39" : "9",
		"21" : "\\mathrm{e}",
		"2D" : "{\\times}10^",
		"2E" : ".",
		"60" : "(",
		"D0" : ")",
		"1A" : "\{",
		"1B" : "\}",
		"C8" : "\\frac",
		"1D" : "",
		"1E" : ""
		};
	return map_dict[inner_key];
}
