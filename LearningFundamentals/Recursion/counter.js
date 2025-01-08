function counter(count) {
  console.log(count);
  if (count > 1) {
    count = count - 1;
    counter(count);
  } else {
    return;
  }
}

counter(5);
