import { ApiClient } from './api-client.service';
import { User } from 'src/app/models/user.model';

const apiClient = new ApiClient();

async function getUser(id: number): Promise<User> {
    return apiClient.get<User>(`/users/${id}`);
}

async function updateUser(user: User): Promise<User> {
    return apiClient.put<User>(`/users/${user.id}`, user);
}