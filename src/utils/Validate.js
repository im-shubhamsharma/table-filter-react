export const validataData = (data) => {
  let localData = JSON.parse(localStorage.getItem("Inventory1"));
  let status = { error: [], result: true };

  const { name, price, category, stock } = data;

  // condition to check if any required filled is empty
  if (!name || !price || !category || !stock) {
    if (!name) {
      status = {
        error: [...status.error, "Product name is required"],
        result: false,
      };
    }
    if (!price) {
      status = {
        error: [...status.error, "Product price is required"],
        result: false,
      };
    }
    if (!category) {
      status = {
        error: [...status.error, "Product category is required"],
        result: false,
      };
    }
    if (!stock) {
      status = {
        error: [...status.error, "Product stock is required"],
        result: false,
      };
    }
    return status;
  }

  //condition to check if product is already in inventory
  if (localData.find((item) => item.name === name)) {
    status = {
      error: [...status.error, "Product already present in inventory"],
      result: false,
    };
  }

  return status;
};

export const validataEditData = (data) => {
  let status = { error: [], result: true };

  const { name, price, category, stock } = data;

  // condition to check if any required filled is empty
  if (!name || !price || !category || !stock) {
    if (!name) {
      status = {
        error: [...status.error, "Product name is required"],
        result: false,
      };
    }
    if (!price) {
      status = {
        error: [...status.error, "Product price is required"],
        result: false,
      };
    }
    if (!category) {
      status = {
        error: [...status.error, "Product category is required"],
        result: false,
      };
    }
    if (!stock) {
      status = {
        error: [...status.error, "Product stock is required"],
        result: false,
      };
    }
    return status;
  }

  return status;
};
