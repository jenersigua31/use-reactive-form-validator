import React, { useEffect } from 'react'

import { useReactiveFormValidator } from 'use-reactive-form-validator'

const App = () => {
  const { 
    requirement, 
    validateValue, 
    validateValues 
  } = useReactiveFormValidator()
  
  useEffect( x => {

    const validateEmail = validateValue('invalid-email.yahoo', [
      requirement.required(),
      requirement.email(),
      requirement.minCharacter(5),
      requirement.maxCharacter(10, 'Max 10: Override default message'),
      {
        validate: (value) => !(value.includes('.yahoo')),
        message: "Please use Gmail"
      }      
    ])

    const formData = {
      name: "Joe",
      age: 15,
      address: {
        city: ""
      },
      hobbies: ['a']
    }

    const formRequirements = {
      name: [ requirement.required() ],
      age: [ requirement.minValue(18, "You are underage") ],
      address: { city: [ requirement.required() ] },
      hobbies: [
        requirement.required(),
        {
          message: 'custom',
          validate: () => false
        }
      ]

    };

    const validateForm = validateValues(formData, formRequirements)


    console.log(validateForm);

  }, [])

  return (
    <div>

    </div>
  )
}
export default App
