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
  let nextIndex = index + 1;

  if (this.path.length === nextIndex) {
      if (this.checkContents(newTarget , searchValue)) {
        probe.passed = true};
        return this;
  }

  if (this.isArray(newTarget)) {
    newTarget.forEach( (item) => {
      this.filterWithProbe(item , searchValue , probe , nextIndex)
    } )
  } else {
    filterWithProbe(newTarget , searchValue , probe , nextIndex)
  }


}

checkContents(newTarget , searchValue) {

  if (!isNaN(newTarget)) {
    return newTarget === Number(searchValue);
  };

  return newTarget.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0

}

}

window.Filter = Filter;

export default Filter
