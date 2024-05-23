function FormLogin({ register, errors }) {
  const classInput =
    "block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-zinc-500 sm:text-sm sm:leading-6 invalid:ring-red-700 invalid:focus:ring-red-700";

  return (
    <>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={classInput}
            {...register("email", {
              required: {
                value: true,
                message: "Please, enter your email.",
              },
            })}
          />
        </div>
        <p className="text-red-600 mb-4 font-medium">
          {errors?.email?.message}
        </p>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>

        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className={classInput}
            {...register("password", {
              required: {
                value: true,
                message: "Please, enter your password.",
              },
            })}
          />
          <p className="text-red-600 font-medium">
            {errors?.password?.message}
          </p>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
