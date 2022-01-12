export default {
  data() {
    return {
      errors: {},
    };
  },
  methods: {
    catchValidationErrors(error) {
      if (error.response.status === 422) {
        this.errors = error.response.data.errors;
      }
    },
    hasError(property) {
      return this.errors[property] !== undefined;
    },
    hasErrorMessage(property) {
      if (!Object.keys(this.errors).length) return "";

      return (
        Object.keys(this.errors).length &&
        this.errors[property] &&
        this.errors[property].join("")
      );
    },
    yupToFormErrors(yupError) {
      let errors = {};
      if (yupError.inner) {
        for (let err of yupError.inner) {
          if (!errors[err.path]) {
            errors[err.path] = err.errors;
          }
        }
      }
      return errors;
    },

    jsonToPlainErrorText(errors) {
      let err = "";
      for (let key in errors) {
        err += " " + errors[key].join(". ");
      }
      return err;
    },
    cleanupFormObject(formObject) {
      const cleanedFormObject = {};
      Object.keys(formObject).forEach((key) => {
        if (formObject[key] !== "") {
          cleanedFormObject[key] = formObject[key];
        }
      });
      return cleanedFormObject;
    },
  },
};
