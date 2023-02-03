function stringToTitle(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1)).replaceAll(
    "_",
    " "
  );
}

export default stringToTitle;
