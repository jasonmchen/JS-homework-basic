function isDate(strDate) {

//	var date = document.getElementById("date");
	log(strDate);
	var d = new Date(strDate);
	if ((d.toString() == "Invalid Date") || ( typeof d != 'object') || ( d instanceof Date == false)) {
		return -1;
	}
	// check more detail on entered date
	var parts = date.value.split("/");
	var uYrs = parseInt(parts[0]);
	var uMon = parseInt(parts[1]);
	var uDay = parseInt(parts[2]);
	log("client date " + uYrs + "/" + uMon + "/" + uDay);

	var dYrs = d.getFullYear();
	var dMon = d.getMonth() + 1;
	var dDay = d.getDate();
	log("created date " + dYrs + "/" + dMon + "/" + dDay);

	if ((uYrs != dYrs) || (uMon != dMon) || (uDay != dDay)) {
		return -2;
	}

	displayImg("dateP", true);
	return 0;
}
function isChinese(str) {
	return str.match(/[\u3400-\u9FBF]/); // true if Chinese, else false
}
