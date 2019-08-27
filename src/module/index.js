import UserQuery from './user';
import TraineeQuery from './trainee';
import { traineeMutation } from './trainee';
import { traineeSubscription } from './trainee';
import { userMutation } from './user';
import { userSubscription } from './user';



// console.log(UserQuery,TraineeQuery,"<--->")
const resolvers = {
    Query: {
        ...UserQuery,
        ...TraineeQuery,
    },
    Mutation: {
        ...userMutation,
        ...traineeMutation,
    },
    Subscription: {
        ...traineeSubscription,
        ...userSubscription
    }
};


export default resolvers;