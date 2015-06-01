function isValidIP(str) {
  str = str.trim();
  var ip = str.split(".");
  if (ip.length != 4) return false;
  for (i=0; i<ip.length; i++) {
    var n = ip[i].trim();
    if (isNaN(n)) return false;
    if (n > 255 || n < 0) return false;
  }
  return true;
}