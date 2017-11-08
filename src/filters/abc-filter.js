import Filter from "./filter";

class ABCFilter extends Filter {

  constructor(spec) {
    super(spec);
  }

  isAbc() {
    console.log(true);
    return true;
  }


}

window.ABCFilter = ABCFilter;

export default ABCFilter
