import { useForm } from "react-hook-form";
import "./BuyChai.scss";

export const BuyChai = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { user_name, user_message } = data;
    console.log("onSubmit", data);
  };

  return (
    <section className="buychai--container">
      <div className="form__div--container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form__field--container">
            <label
              for="formfield--user_name"
              className="form__field__input--label"
            >
              Name
            </label>
            <input
              id="formfield--user_name"
              className="form__field__input"
              {...register("user_name", {
                validate: {
                  shouldNotEmpty: (value) => {
                    const emptyCheck =
                      typeof value === "undefined" || value === ""
                        ? false
                        : true;

                    return emptyCheck || "User name is mandatory";
                  },
                },
              })}
            />
            {errors?.user_name && <p>{errors?.user_name?.message}</p>}
          </div>
          <div class="form__field--container">
            <label
              for="formfield--user_message"
              className="form__field__input--label"
            >
              Message
            </label>
            <textarea
              id="formfield--user_message"
              rows={"4"}
              className="form__field__textarea"
              defaultValue=""
              {...register("user_message", {
                required: true,
                validate: {
                  shouldNotEmpty: (value) => {
                    const emptyCheck =
                      typeof value === "undefined" || value === ""
                        ? false
                        : true;

                    return emptyCheck || "message is mandatory";
                  },
                },
              })}
            />
            {errors?.user_message && <p>{errors?.user_message?.message}</p>}
          </div>
          <div class="form__field--container">
            <input
              type="submit"
              className="form__field__button--submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
