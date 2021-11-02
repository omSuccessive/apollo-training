
const Query = {
    getTrainee: async (parent, args, { dataSources }) => {
        return await dataSources.traineeApi.getTrainee();
    }
}
export default Query;