import  { InMemoryDbService } from "angular-in-memory-web-api";
import  { Category } from "./pages/categories/shared/category.model";

export class InMemoryDbService implements InMemoryDbService {
    createDb(){
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de conta da casa'},
            { id: 2, name: 'Saude', description: 'Plano de saude'},
            { id: 3, name: 'Lazer', description: 'Cinema, parques'},
            { id: 4, name: 'Salario', description: 'Recebimento de salario'},
            { id: 5, name: 'Freelas', description: 'Trabalho como freelancer'}
        ];

        return { categories}
    }
}