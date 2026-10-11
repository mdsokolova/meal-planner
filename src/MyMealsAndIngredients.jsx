function MyMealsAndIngredients({ selectedDay, updateDay }) {
  if (!selectedDay) {
    return <p>Select a day or add one to start planning.</p>;
  }

  function editMeal(field, value) {
    updateDay({
      ...selectedDay,
      [field]: value,
    });
  }

  return (
    <section className="meal-editor">
      <h2>Edit your day</h2>

      <label htmlFor="day-title">Day or title</label>
      <input
        id="day-title"
        type="text"
        value={selectedDay.title}
        onChange={(event) => editMeal('title', event.target.value)}
        maxLength={60}
      />

      <label htmlFor="day-meals">Meals</label>
      <textarea
        id="day-meals"
        placeholder="Breakfast, lunch, dinner..."
        value={selectedDay.mealForADay}
        onChange={(event) =>
          editMeal('mealForADay', event.target.value)
        }
        rows={5}
      />

      <label htmlFor="day-ingredients">Ingredients</label>
      <textarea
        id="day-ingredients"
        placeholder="Write your ingredients here..."
        value={selectedDay.ingredients}
        onChange={(event) =>
          editMeal('ingredients', event.target.value)
        }
        rows={5}
      />
    </section>
  );
}

export default MyMealsAndIngredients;