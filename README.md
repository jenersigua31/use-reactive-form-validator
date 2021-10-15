# use-reactive-form-validator

> 

[![NPM](https://img.shields.io/npm/v/use-reactive-form-validator.svg)](https://www.npmjs.com/package/use-reactive-form-validator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-reactive-form-validator
```

## Usage

```tsx
import * as React from 'react'

import { useReactiveFormValidator } from 'use-reactive-form-validator'

const Example = () => {
  
  const { 
    requirement, 
    validateValue, 
    validateValues 
  } = useReactiveFormValidator()
  

  useEffect(() => {

    // Validate Single Value
    const validateEmail = validateValue('invalid-email', [
      requirement.required(),
      requirement.email(),
      requirement.minCharacter(5),
      requirement.maxCharacter(20, 'Override default message'),
      
      // Add Custom validation
      {
        validate: (value) => !(value.includes('.yahoo')),
        message: "Please use Gmail"
      }      
    ]);
    console.log(validateEmail);
    // {
    //   "valid": false,
    //   "errors": [
    //     "Invalid Email",
    //     "Max 10: Override default message",
    //     "Please use Gmail"
    //   ]
    // }

    // Validate Object or Nested Object
    const formData = {
      name: "Joe",
      age: 15,
      address: {
        city: ""
      }
    }

    const formRequirements = [
      name: [ requirement.required() ],
      age: [ requirement.minValue(18, "You are underage") ],
      address: { city: [ requirement.required('Please enter City') ] }
    ];
    const validateForm = validateValue(formData, formRequirements);

    console.log(validateForm);
    // {
    //   "valid": false,
    //   "result": {
    //     "name": {
    //       "valid": true,
    //       "errors": []
    //     },
    //     "age": {
    //       "valid": false,
    //       "errors": [
    //         "You are underage"
    //       ]
    //     },
    //     "address": {
    //       "city": {
    //         "valid": false,
    //         "errors": [
    //           "Please enter City"
    //         ]
    //       }
    //     }
    //   }
    // }


  }, [])

  return (
    <div>
      Form Validator
    </div>
  )
}
```

## License

MIT © [jenersigua31](https://github.com/jenersigua31)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
