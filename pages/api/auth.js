export default function handler(req, res) {
    const response = {authToken: 'auth token from api'}
    res.status(200).json(response)
}