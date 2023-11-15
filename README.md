## Clean Architecture implementation in React

This project is a simple to-do list application that uses the Clean Architecture principles.


### Clean Architecture

The Clean Architecture is a software architecture proposed by Uncle Bob, which is based on the separation of concerns principle. The main idea is to divide the software into layers, where each layer has a specific responsibility. 

### Layered Architecture: 

- **Data**: It handles data retrieval and storage. And it may interact with APIs, databases. 
  - **DataSource**: It contains classes or functions that directly interact with data sources like APIs.
  - **Repository**: It provides an abstraction layer over the data source, typically implementing the repository pattern.
- **Domain**: It contains the business logic of the application. It is the most inner layer of the application. It is independent of any other layer. 
  - **Model**: It contains and defines the data structures and data models of the application.
  - **Repository**: It defines the interfaces of the repositories that are implemented in the data layer.
  - **UseCase**: This folder contains the application-specific business rules - use cases. It is also the most inner layer of the application.
- **Presentation**: It contains the UI components of the application. It is dependent on the domain layer. 
  - **View**: It contains the UI components of the application.
  - **ViewModel**: It contains the business logic of the UI layer. It is dependent on the use cases of the domain layer.

### Project Structure: 

````
├── public
├── src
│   ├── Data
│   │   ├── DataSource
│   │   │   └── API
│   │   │       └── TodoDataSource.ts
│   │   └── Repository
│   │       └── TodoRepositoryImpl.ts
│   ├── Domain
│   │   ├── Model
│   │   │   └── Todo.ts
│   │   ├── Repository
│   │   │   └── TodoRepository.ts
│   │   └── UseCase
│   │       └── Todo
│   │           ├── CreateTodo.ts
│   │           ├── GetTodos.ts
│   │           ├── RemoveTodo.ts
│   │           └── ToggleCheckTodo.ts
│   ├── Presentation
│   │   └── Todo
│   │       └── TodoList
│   │           ├── TodoListView.tsx
│   │           └── TodoListViewModel.tsx
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
└── package.json

````
### How to run

````
npm install
npm start
````
### How to run tests

````
npm test
npm test -- --coverage
````

