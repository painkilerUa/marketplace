export default class Response {
    call (method) {
      return (req, res, next) =>
        Promise.resolve(this[method](req, res))
          .then(result => res.json(result))
          .catch(next)
    }
  }