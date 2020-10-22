# Netlify submission-created function

An isolated demo of a netlify submission-created function. Hosted on Netlify at [https://romantic-kirch-49286a.netlify.app/](https://romantic-kirch-49286a.netlify.app/)

## The Question

Is it possible to modify the response of a `submission-created` Function?

### The setup

- A form (in `inedx.html`) with a single text field, handled with Netlify Forms
- A Netlify function for the `submission-created` event in `functions/submission-created.js`

### Expectations

When submitting the form, the expecation is that I will see the return value specified in `submission-created.js`

```
return {
  statusCode: 200,
  body: JSON.stringify({ message: "A new form submission came in" }),
};
```

### Reality

When submitting the form, I see the standard Netlify Forms submission success screen

![](https://p197.p4.n0.cdn.getcloudapp.com/items/yAulKQLL/Screen%20Recording%202020-10-22%20at%2008.48.08%20AM.gif?v=565d628273e43f2734b59760d87f7994)

### More info

The function is being invoked. I can confirm that with the function log:

![](https://p197.p4.n0.cdn.getcloudapp.com/items/4guJKeyN/logs.png?v=e1d5098eaabb602ac4492c51996f507d)

The form submissions are coming in as expected. Can see those in the Verified submissions.

## Something that makes this tricky

When running locally with `netlify dev` this works as expected. Submitting the form responds with the custom response set in `submission-created`. It makes sense because we don't have the standard Netlify form success page locally, but does create confusion because it's different than how things work in production.
