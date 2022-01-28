export default function handler(req, res) {

    console.log('in user')
    const response = {id: 'some-user-id'}

    res.status(200).json(response)
}