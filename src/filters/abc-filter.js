import Filter from "./filter";

class ABCFilter extends Filter {

  constructor(spec) {
    super(spec);
  }

  isAbc() {
    return true;
  }


}

window.ABCFilter = ABCFilter;

export default ABCFilter
