class Filter {

  constructor(spec) {
    this.name = spec.name;
    this.path = spec.path;
  }


isAbc() {
  console.log(false);
  return false;
}

isChoices() {
    return false;
}

filter(spells , value){

  if (value === "") {return spells};

  return spells.filter((spell) => {
    return spell[this.id].toLowerCase().indexOf(value.toLowerCase()) >= 0;
  });
}

}

window.Filter = Filter;

export default Filter
