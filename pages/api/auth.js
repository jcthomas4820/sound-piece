const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

export default function handler(req, res) {

    const response = {authToken: 'auth token from api'}
    res.status(200).json(response)
}