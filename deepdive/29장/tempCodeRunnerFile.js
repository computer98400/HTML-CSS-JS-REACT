a = new Array();
  for (var b = 0; b < 10; b++) {
    a[0] |= b;  // 안 좋아요!
  }
  //vs.
  a = new Array();
  a[0] = 0;
  for (var b = 0; b < 10; b++) {
    a[0] |= b;  // 훨씬 좋습니다. 2배 더 빨라요.
  }