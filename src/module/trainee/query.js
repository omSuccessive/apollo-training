
const Query = {
    getTrainee: async (parent, args, { dataSources }) => {
        return await dataSources.TraineeApi.getTrainee();
    }
}
export default Query;