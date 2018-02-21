import Response from '../response'
import User from './user.model'

class UserController extends Response {
    getAll () {
        return User.find()
        // const newUser = new User({
        //     name: 'Petr',
        //      avatarUri: 'https://loremflickr.com/320/240',
        //      location: 'Enakievo',
        //      languages: ['ru', 'pl', 'fe'],
        //      tags: ['real estate', 'economics', 'tsp']
        // })
        // newUser.save()
    }
}

export default new UserController();