import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import MealsJson from "./MealsJson.json"


const AvailableMeals = ({ adminControls }) => {
   const [meals, setMeals] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {

         const loadedMeals = [];
         for (const key in MealsJson) {
            loadedMeals.push({
               id: MealsJson[key]._id,
               name: MealsJson[key].name,
               description: MealsJson[key].description,
               price: MealsJson[key].price,
            });
         }
         setMeals(loadedMeals);
         setIsLoading(false);
   }, []);

   const mealsList = meals.map((meal) => (
      <MealItem key={meal.id} meal={meal} adminControls={adminControls} />
   ));
   // meals.splice(0, meals.length); //simulating empty response
   if (isLoading) {
      return (
         <section className={styles["meals-loading"]}>
            <h2>Loading...</h2>
         </section>
      );
   }
   if (meals.length === 0) {
      return (
         <section className={styles["meals-loading"]}>
            <h2>No Meals Found.</h2>
         </section>
      );
   }
   return (
      <section className={styles.meals}>
         <Card>
            <ul>{mealsList}</ul>
         </Card>
      </section>
   );
};

export default AvailableMeals;
