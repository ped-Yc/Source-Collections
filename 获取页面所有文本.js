var array = [];
var allText = "";
function onload() {
  var tags = document.body.getElementsByTagName("*");
  for (var i = 0; i < tags.length; i++) {
    if (
      tags[i].nodeName != "SCRIPT" &&
      tags[i].nodeName != "STYLE" &&
      tags[i].nodeName != "TEXTAREA"
    ) {
      //过滤script、style和textarea标签
      array.push(getText(tags[i]));
    }
  }
}
var getText = function (dom) {
  allText = dom.innerHTML;
  allText = allText.replace(/<\/?.+?\/?>/g, ""); //去除标签
  allText = allText.replace(/\s+/g, ""); //去除空格
  if (allText == "") return;
  console.log(allText);
  return allText;
};
onload();
