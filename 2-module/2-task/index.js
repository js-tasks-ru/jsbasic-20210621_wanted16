function isEmpty(obj) {
  for (prop in obj) {
    return false;
  }
  return true;
}
