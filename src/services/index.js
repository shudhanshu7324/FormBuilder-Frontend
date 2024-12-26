const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const register = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Handle success (HTTP status codes 200-299)
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } else if (response.status === 400) {
      // Handle client-side error
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || "Invalid input data",
      };
    } else {
      // Handle other errors
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    // Handle network errors or unexpected issues
    return {
      success: false,
      error: error.message || "Something went wrong. Please try again.",
    };
  }
};

export const login = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Handle success (HTTP status codes 200-299)
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } else if (response.status === 400) {
      // Handle client-side error
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || "Invalid input data",
      };
    } else {
      // Handle other errors
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    // Handle network errors or unexpected issues
    return {
      success: false,
      error: error.message || "Something went wrong. Please try again.",
    };
  }
};

export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("User is not authenticated. Please log in.");
  }

  const response = await fetch(`${BACKEND_URL}/api/v1/username`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!response.ok) {
    // Use response status and message for detailed error reporting
    const errorMessage = await response.text();
    throw new Error(
      `Failed to fetch expenses: ${response.status} ${response.statusText} - ${errorMessage}`
    );
  }

  return response.json();
};

export const createFolder = async (data) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User is not authenticated. Please log in.");
    }
    const response = await fetch(`${BACKEND_URL}/api/v1/createfolder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } else if (response.status === 400) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || "Invalid input data",
      };
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    return {
      success: false,
      error: error.message || "Something went wrong. Please try again.",
    };
  }
};

export const createForm = async (data) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User is not authenticated. Please log in.");
    }
    const response = await fetch(`${BACKEND_URL}/api/v1/createform`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } else if (response.status === 400) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || "Invalid input data",
      };
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    return {
      success: false,
      error: error.message || "Something went wrong. Please try again.",
    };
  }
};

export const getFolders = async () => {
  try {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");
    if (!token) {
      throw new Error("User is not authenticated. Please log in.");
    }
    const response = await fetch(`${BACKEND_URL}/api/v1/allfolders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        userid: userId,
      },
    });
    if (response.ok) {
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } else if (response.status === 400) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || "Error in fetching folders",
      };
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    return {
      success: false,
      error: error.message || "Something went wrong. Please try again.",
    };
  }
};


export const getForms = async () => {
  try {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");
    if (!token) {
      throw new Error("User is not authenticated. Please log in.");
    }
    const response = await fetch(`${BACKEND_URL}/api/v1/getforms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        userid: userId,
      },
    });
    if (response.ok) {
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } else if (response.status === 400) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || "Error in fetching forms",
      };
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    return {
      success: false,
      error: error.message || "Something went wrong. Please try again.",
    };
  }
};
