function MyList({
  mealPlans,
  addMeal,
  selectedDayId,
  setSelectedDayId,
}) {
  return (
    <section className="meal-list">
      <h2>Your days</h2>

      <button type="button" onClick={addMeal}>
        Add a day
      </button>

      <ul className="day-list">
        {mealPlans.map((meal) => (
          <li key={meal.id}>
            <button
              type="button"
              className={
                meal.id === selectedDayId
                  ? 'day-button selected'
                  : 'day-button'
              }
              aria-pressed={meal.id === selectedDayId}
              onClick={() => setSelectedDayId(meal.id)}
            >
              {meal.title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MyList;