// Sample exercise data (replace this with your actual exercise data)

const exercises = [
  {
    name: "Push-up",
    muscles_worked: "Chest, Shoulders, Triceps",
    description:
      "A bodyweight exercise where you push yourself up from the ground, engaging your chest, shoulders, and arms.",
    equipment: "None (bodyweight)",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Squats",
    muscles_worked: "Quadriceps, Hamstrings, Glutes",
    description:
      "A fundamental lower body exercise involving bending your knees and hips, effectively working your thighs, hamstrings, and glutes.",
    equipment: "None (bodyweight), Barbell",
    sets: "4 sets",
    reps: "12 reps",
  },
  {
    name: "Pull-up",
    muscles_worked: "Back, Biceps, Forearms",
    description:
      "Lift yourself upwards using an overhead bar, engaging your back, biceps, and forearms.",
    equipment: "Pull-up Bar",
    sets: "3 sets",
    reps: "8 reps",
  },
  {
    name: "Plank",
    muscles_worked: "Core, Shoulders, Back",
    description:
      "Hold a push-up position with your body straight, engaging your core muscles for stability.",
    equipment: "None (bodyweight)",
    sets: "3 sets",
    reps: "30 seconds",
  },
  {
    name: "Lunges",
    muscles_worked: "Quadriceps, Hamstrings, Glutes",
    description:
      "Step forward into a lunge, bending your knees and lowering your hips to work your lower body muscles.",
    equipment: "None (bodyweight), Dumbbells",
    sets: "3 sets",
    reps: "12 reps",
  },
  {
    name: "Sit-up",
    muscles_worked: "Core, Hip Flexors",
    description:
      "Lie on your back, bend your hips and waist to bring your torso toward your knees, engaging your core muscles.",
    equipment: "None (bodyweight)",
    sets: "3 sets",
    reps: "15 reps",
  },
  {
    name: "Calf Raises",
    muscles_worked: "Calves",
    description: "Stand on your toes, engaging your calf muscles.",
    equipment: "None (bodyweight), Dumbbells",
    sets: "3 sets",
    reps: "12 reps",
  },
  {
    name: "Bench Press",
    muscles_worked: "Chest, Shoulders, Triceps",
    description:
      "Lie on your back, push a weight upwards from your chest, engaging your chest, shoulders, and arms.",
    equipment: "Barbell, Bench",
    sets: "4 sets",
    reps: "8 reps",
  },
  {
    name: "Bicep Curls",
    muscles_worked: "Biceps",
    description: "Lift a weight upwards from your waist, engaging your biceps.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Tricep Extensions",
    muscles_worked: "Triceps",
    description:
      "Lift a weight upwards from behind your head, engaging your triceps.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Shoulder Press",
    muscles_worked: "Shoulders, Triceps",
    description:
      "Lift a weight upwards from your shoulders, engaging your shoulders and arms.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Row",
    muscles_worked: "Back, Biceps, Forearms",
    description:
      "Pull a weight upwards towards your chest, engaging your back, biceps, and forearms.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Fly",
    muscles_worked: "Chest, Shoulders",
    description:
      "Lift a weight upwards from your chest, engaging your chest and shoulders.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Lateral Raise",
    muscles_worked: "Shoulders",
    description:
      "Lift a weight outwards from your sides, engaging your shoulders.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Shrug",
    muscles_worked: "Traps",
    description: "Lift a weight upwards from your waist, engaging your traps.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Reverse Fly",
    muscles_worked: "Shoulders, Back",
    description:
      "Lift a weight outwards from your chest, engaging your shoulders and back.",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Lunge",
    muscles_worked: "Quadriceps, Hamstrings, Glutes",
    description:
      "Step forward into a lunge, bending your knees and lowering your hips to work your lower body muscles.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Deadlift",
    muscles_worked: "Back, Glutes, Hamstrings",
    description:
      "Lift a weight upwards from the ground, engaging your back, glutes, and hamstrings.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Side Lunge",
    muscles_worked: "Quadriceps, Hamstrings, Glutes",
    description:
      "Step sideways into a lunge, bending your knees and lowering your hips to work your lower body muscles.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Calf Raise",
    muscles_worked: "Calves",
    description: "Stand on your toes, engaging your calf muscles.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Sit-up",
    muscles_worked: "Core, Hip Flexors",
    description:
      "Lie on your back, bend your hips and waist to bring your torso toward your knees, engaging your core muscles.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Bench Press",
    muscles_worked: "Chest, Shoulders, Triceps",
    description:
      "Lie on your back, push a weight upwards from your chest, engaging your chest, shoulders, and arms.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Bicep Curl",
    muscles_worked: "Biceps",
    description: "Lift a weight upwards from your waist, engaging your biceps.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  {
    name: "Dumbbell Tricep Extension",
    muscles_worked: "Triceps",
    description:
      "Lift a weight upwards from behind your head, engaging your triceps.",
    equipment: "Dumbbells",
    sets: "3 sets",
    reps: "10 reps",
  },
  // Add more exercises as needed
];

function displayExercises(exerciseList) {
  exerciseList.innerHTML = ""; // Clear previous exercises

  exercises.forEach((exercise) => {
    const exerciseCard = document.createElement("div");
    exerciseCard.classList.add("exercise-card");

    const exerciseInfo = `
      <h2>${exercise.name}</h2>
      <p><strong>Muscles Worked:</strong> ${exercise.muscles_worked}</p>
      <p><strong>Description:</strong> ${exercise.description}</p>
      <p><strong>Equipment:</strong> ${exercise.equipment}</p>
      <p><strong>Sets:</strong> ${exercise.sets}</p>
      <p><strong>Reps:</strong> ${exercise.reps}</p>
    `;

    exerciseCard.innerHTML = exerciseInfo;
    exerciseList.appendChild(exerciseCard);
  });
}
// Function to show/hide exercises based on selected muscle group
function toggleExerciseVisibility(selectedMuscle) {
  const exerciseCards = document.querySelectorAll(".exercise-card");

  exerciseCards.forEach((card) => {
    const musclesWorked = card
      .querySelector("p:nth-child(3)")
      .textContent.split(":")[1]
      .trim();

    if (selectedMuscle === "all" || musclesWorked.includes(selectedMuscle)) {
      card.style.display = "block"; // Show exercises that match the selected muscle
    } else {
      card.style.display = "none"; // Hide exercises that don't match
    }
  });
}

// Event listener for the muscle filter dropdown
document
  .getElementById("muscle-filter")
  .addEventListener("change", function (event) {
    const selectedMuscle = event.target.value.toLowerCase();
    toggleExerciseVisibility(selectedMuscle);
  });

document
  .getElementById("display-exercises-btn")
  .addEventListener("click", function () {
    const exerciseList = document.getElementById("exercise-list");
    displayExercises(exerciseList);
  });

// Call the initial display function on page load
window.addEventListener("load", function () {
  toggleExerciseVisibility("all"); // Display all exercises initially
});

//Display progress graph
const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Weight",
        data: [90, 88, 85, 83, 82, 80],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//Display progress graph
const ctx2 = document.getElementById("myChart2").getContext("2d");

const myChart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Weight",
        data: [90, 88, 85, 83, 82, 80],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
