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
}
