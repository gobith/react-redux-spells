import Filter from "./filter";

class ChoicesFilter extends Filter {

  constructor(spec) {
    super(spec);
    this.choices = spec.choices;
  }

  isChoices() {
      return true;
  }

}

window.ChoicesFilter = ChoicesFilter;

export default ChoicesFilter
