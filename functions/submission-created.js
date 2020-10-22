exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "A new form submission came in" }),
  };
};
