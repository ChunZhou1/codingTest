

export const printValue = (value: number) => {
    if (isNaN(value)) {
      return { status: "fail", error: "input is not a number" };
    }
  
    if (value <= 0)
      return { status: "fail", error: "input is not a positive interger number" };
  
    if (value % 1 !== 0) return { status: "fail", error: "not a integer" };
  
    if (value % 22 === 0) {
      console.log("candybar", "bar", "candy");
      return { status: "success" };
    }
  
    if (value % 11 === 0) {
      console.log("bar");
      return { status: "success" };
    }
  
    if (value % 2 === 0) {
      console.log("candy");
      return { status: "success" };
    }
  
    console.log(value);
  };