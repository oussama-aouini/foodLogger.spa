import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 chars" }),
  calories: z
    .number({ invalid_type_error: "Calories field is required" })
    .min(1),
});

type FormData = z.infer<typeof schema>;

interface Food {
  name: string;
  calories: number;
}

const Foods = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    axios
      .get<Food[]>("https://localhost:7147/api/Food", {
        signal: controller.signal,
      })
      .then((response) => setFoods(response.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setIsLoading(false)); // best approach but doesn' work on strict mode must be in finally otherwise set immedialty cause axios get is async

    return () => controller.abort();
  }, []);

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
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {foods.map((food) => (
          <li key={food.name}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Foods;
