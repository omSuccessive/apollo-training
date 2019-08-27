import { pubsub, LOGIN } from '../../Subscription' ;

const userMutation = {
    login: async (parent, args, {dataSources}) => {
        console.log(args);
        const result = await dataSources.userApi.login(args);
        pubsub.publish(LOGIN, {
            login: result
        });
        return result;
    }
}
export default userMutation;