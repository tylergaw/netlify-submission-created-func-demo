exports.handler = async () => {
  console.log("submission-created.js invoked");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "A new form submission came in" }),
  };
};
