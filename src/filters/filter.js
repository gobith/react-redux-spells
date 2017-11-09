class Filter {

  constructor(spec) {
    this.name = spec.name;
    this.path = spec.path;
  }


isAbc() {
  return false;
}

isChoices() {
    return false;
}

defaultValue() {
  return "";
}

isArray(obj){
    return !!obj && obj.constructor === Array;
}

filter(spells , value){

  let defaultValue = this.defaultValue();
  if (value === defaultValue) {return spells};

  return spells.filter((spell) => {
    return(this.filterSpell(spell , value))
  });
}


filterSpell(spell , searchValue) {

  let probe = {passed: false};
  let index = 0;

this.filterWithProbe(spell , searchValue , probe , index);

  return probe.passed;
}

filterWithProbe(target , searchValue , probe , index) {

  let newTarget = target[this.path[index]];

  if (this.path.length === index + 1) {
      if (newTarget.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0) {
        probe.passed = true};
        return this;
  }

  if (this.isArray(newTarget)) {
    newTarget.forEach( (item) => {
      this.filterWithProbe(item , searchValue , probe , index + 1)
    } )
  } else {
    filterWithProbe(newTarget , searchValue , probe , index + 1)
  }


}


}

window.Filter = Filter;

export default Filter
