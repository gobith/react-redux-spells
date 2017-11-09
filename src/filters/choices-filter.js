import Filter from "./filter";

class ChoicesFilter extends Filter {

  constructor(spec) {
    super(spec);
    this.choices = spec.choices;
  }

  isChoices() {
      return true;
  }

  defaultValue() {
    return "All";
  }

}

window.ChoicesFilter = ChoicesFilter;

export default ChoicesFilter
