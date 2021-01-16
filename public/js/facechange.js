function facechange(objName) {
  if ($(objName).hasClass("closed")) {
    $(objName).removeClass("closed");
  } else {
    $(objName).addClass("closed");
  }
}
