import { pubsub, LOGIN } from '../../Subscription';

const userSubscription = {
    login: {
        subscribe: () => pubsub.asyncIterator([LOGIN]),
    }
}
export default userSubscription;
