//|              URL                 | Method | Why?                                               |                                                                       Request                                                                                        |                                                                                  Response Data                                                                                                                           | Codes                                    |
//|:--------------------------------:|:------:|----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|------------------------------------------|
//| '/boorish/users/:uid'            | GET    | Retrieve a user                                    | params.uid (user)                                                                                                                                                    | { username: String, foodTokens: Number, displayName: String }                                                                                                                                                            | 200, OK 404, Not found                   |
//| '/boorish/users'                 | POST   | Create a new user                                  | { username: String, password: String }                                                                                                                               | { authToken: String }                                                                                                                                                                                                    | 200, OK                                  |
//| '/boorish/users/:uid'            | DELETE | Remove a user from the database                    | params.uid (user) and { password: String }                                                                                                                           |                                                                                                                                                                                                                          | 200, OK 401, Unauthorized                |
//| '/boorish/users/signin'          | POST   | User signs in                                      | { username: String, password: String }                                                                                                                               | { username: String, displayName: String, authToken: String }                                                                                                                                                             | 200, OK 401, Unauthorized                |
//| '/boorish/users/signedin'        | GET    | Check user authorization                           | No data                                                                                                                                                              | Status Code                                                                                                                                                                                                              | 200, OK 401, Unauthorized                |
//|                                  |        |                                                    |                                                                                                                                                                      |                                                                                                                                                                                                                          |                                          |
//| '/boorish/meals'                 | GET    | Retrieve all available meals                       | No data                                                                                                                                                              | { meal_id: String, imgUrl: String, description: String, title: String, ingredients: Array, creator: String, consumers: Array, date_available: Number, portions: Number, tags: Array, feedback: Array , overall: Number } | 200, OK                                  |
//| '/boorish/meals'                 | POST   | Add a new meal to the database                     | { description: String, title: String, ingredients: Array, creator: String, date_available: Number, portions: Number, tags: Array }                                   | { imgUrl: String }                                                                                                                                                                                                                  | 200, OK 401, Unauthorized                |
//| '/boorish/meals/:mid'            | PUT    | Edit a meal                                        | params.mid (meal) { imgUrl: String, description: String, title: String, ingredients: Array, creator: String, date_available: Number, portions: Number, tags: Array } | No data                                                                                                                                                                                                                  | 200, OK 401, Unauthorized                |
//| '/boorish/meals/:mid'            | DELETE | Delete a meal from the database                    | params.mid (meal)                                                                                                                                                    | No data                                                                                                                                                                                                                  | 200, OK 404, Not found                   |
//|                                  |        |                                                    |                                                                                                                                                                      |                                                                                                                                                                                                                          |                                          |
//| '/boorish/meals/users/:uid'      | GET    | Get all meals where a user is a creator or eater   | params.uid (user)                                                                                                                                                    | { user_id: String, created: { current: Array, past: Array }, eating: { current: Array, past: Array } }                                                                                                                   | 200, OK 404, Not found                   |
//| '/boorish/meals/:mid/:uid'       | POST   | Add a meal to a user's list                        | params.mid (meal) and params.uid (user)                                                                                                                              | No data                                                                                                                                                                                                                  | 200, OK 404, Not found                   |
//| '/boorish/meals/:mid/:uid'       | PUT    | Remove a meal from a user's current list           | params.mid (meal) and params.uid (user)                                                                                                                              | No data                                                                                                                                                                                                                  | 200, OK 404, Not found                   |
//|                                  |        |                                                    |                                                                                                                                                                      |                                                                                                                                                                                                                          |                                          |
//| '/boorish/feedback/meals/:mid'   | GET    | Retrieve the feedback from a specific meal         | params.mid (meal)                                                                                                                                                    | { meal_id: String, ratingOne: Number, ratingTwo: Number, ratingThree: Number, overall: Number }                                                                                                                          | 200, OK 404, Not found                   |
//| '/boorish/feedback/meals/:mid'   | POST   | Give feedback on a meal                            | params.mid (meal) and { user_eater: String, ratingOne: Number, ratingTwo: Number, ratingThree: Number }                                                              | No data                                                                                                                                                                                                                  | 200, OK 404, Not found                   |
//| '/boorish/feedback/meals/:mid'   | PUT    | Edit feedback on a meal                            | params.mid (meal) and { user_eater: String, ratingOne: Number, ratingTwo: Number, ratingThree: Number }                                                              | No data                                                                                                                                                                                                                  | 200, OK 404, Not found, 401, Unauthorized|
//|                                  |        |                                                    |                                                                                                                                                                      |                                                                                                                                                                                                                          |                                          |
//| '/boorish/tags/'                 | GET    | Retrieve all meal tags                             | No data                                                                                                                                                              | { tags: Array }                                                                                                                                                                                                          | 200, OK                                  |
//|                                  |        |                                                    |                                                                                                                                                                      |                                                                                                                                                                                                                          |                                          |
  
