const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "Sonora",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "CDMX",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   //E1
   explorers.forEach(explorer => {
       console.log(explorer.name)
       console.log("...")
   })

   //E2
   explorers.forEach(explorer => {console.log(explorer.stack)})

   //E3 map crea lista 
   console.log(explorers.map(explorer => explorer.stack)) 

   //E4
   console.log("Ejercicio 4")
   const explorerWithJS = explorers.filter(explorerJS => explorerJS.stack.includes('js'))
   console.log(explorerWithJS)
   explorerWithJS.forEach(explorer_JS => {console.log(explorer_JS.name)})

   //E5
   console.log('\nEjercicio 5')
   const found = explorers.find(explorerCity => explorerCity.city == 'CDMX')
   console.log(found)

   //E6
   console.log('\nEjercicio 6')
   const total = explorers.reduce((acc,item) => acc + item.exercises_completed,0)
   console.log(total)

   //E7
   console.log('\nEjercicio 7')
   explorers.forEach(item => {console.log(item.missions.frontend.exercisesFinished + ' ')})
   console.log(explorers.some(item => item.missions.frontend.exercisesFinished == true))
   
   //E8
   console

