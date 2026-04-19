parsed={
  success: false,
  error:  [
    {
      "origin": "string",
      "code": "too_small",
      "minimum": 6,
      "inclusive": true,
      "path": [
        "password"
      ],
      "message": "Password should be at least 6 characters"
    }
  ]
}

console.log(parsed.error[0].message)
