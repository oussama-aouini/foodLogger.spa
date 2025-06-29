import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 chars" }),
  calories: z
    .number({ invalid_type_error: "Calories field is required" })
    .min(1),
});

type FormData = z.infer<typeof schema>;

const Foods = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Find your Foods</h2>
      <p>search throght a list of foods</p>
      <p>add foods</p>
      <p>See food information</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input {...register("name")} id="name" type="text" />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input
            {...register("calories", { valueAsNumber: true })}
            id="calories"
            type="number"
          />
          {errors.calories && <p>{errors.calories.message}</p>}
        </div>
        <button disabled={!isValid} type="submit">
          Add Food
        </button>
      </form>
    </div>
  );
};
export default Foods;
