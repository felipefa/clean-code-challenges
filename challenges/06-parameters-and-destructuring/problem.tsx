function UpdateUserRoute(body, params) {
  UpdateUserController(body, params)
}

function UpdateUserController(data, params) {
  UserRepository.update(data, params)
}

const UserRepository = {
  update: (data, params) => {},
}