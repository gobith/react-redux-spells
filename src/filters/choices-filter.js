import Filter from "./filter";

class ChoicesFilter extends Filter {

  constructor(spec) {
    super(spec);
    this.choices = spec.choices;
  }

  isChoices() {
      return true;
  }

  filter(spells , value){

    if (value === "All") {return spells};

    return spells.filter((spell) => {
      return spell[this.id].toLowerCase().indexOf(value.toLowerCase()) >= 0;
    });
  }

}

window.ChoicesFilter = ChoicesFilter;

export default ChoicesFilter
