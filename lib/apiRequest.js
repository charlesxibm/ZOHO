import toast from "react-hot-toast";

export async function makePostRequest(url, data, resourceName, reset) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response);
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
    } else {
      toast.error("Something went Wrong");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function makeGetRequest(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
    return [];
  }
}
