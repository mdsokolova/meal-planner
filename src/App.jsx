import { useState, useEffect } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';

function App() {
  const [mealPlans, setMealPlans] = useState(() => {
  try {
    const savedPlans = localStorage.getItem('meal-plans');
    return savedPlans ? JSON.parse(savedPlans) : [];
  } catch {
    return [];
  }
});
  const [selectedDayId, setSelectedDayId] = useState(null);

  function addMeal() {
    const newMeal = {
      id: crypto.randomUUID(),
      title: 'New day',
      mealForADay: '',
      ingredients: '',
    };

    setMealPlans((previousPlans) => [
      newMeal,
      ...previousPlans,
    ]);
    setSelectedDayId(newMeal.id);
  }

  const selectedDay = mealPlans.find(
    (meal) => meal.id === selectedDayId
  );

  function updateDay(updatedDay) {
    setMealPlans((previousPlans) =>
      previousPlans.map((meal) =>
        meal.id === updatedDay.id ? updatedDay : meal
      )
    );
  }
  function deleteDay(dayId) {
  setMealPlans((previousPlans) =>
    previousPlans.filter((meal) => meal.id !== dayId)
  );

  setSelectedDayId(null);
}

  return (
    <main className="meal-planner">
      <h1>Meal Planner</h1>
      <p>Plan your meals and keep your ingredients together.</p>

      <MyList mealPlans={mealPlans} 
      addMeal={addMeal}
      selectedDayId={selectedDayId}
      
      setSelectedDayId={setSelectedDayId}
      
      />
    
<MyMealsAndIngredients
  selectedDay={selectedDay}
  updateDay={updateDay}
  deleteDay={deleteDay}
/>
    

    
    </main>
  );
}

export default App;