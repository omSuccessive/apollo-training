import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../../config';
class TraineeApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = configuration.serviceURL;
    }
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.authorization);
    }
    async getTrainee() {
        const result = await this.get('trainee');
        return result;
    }
    async addTrainee(args) {
        const { id, name, email, password } = args.input;
        const result = await this.post('trainee', { id, name, email, password });
        return result;
    }
    async updateTrainee(args) {

        const { id, dataToUpdate } = args.input;
        const result = await this.put('trainee', { id, dataToUpdate });
        return result;

    }
    async deleteTrainee(args) {

        const { id } = args.input;
        const result = await this.delete(`trainee/${id}`);
        return result;

    }
}
export default TraineeApi;
