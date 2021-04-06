# REST (REpresentational State Transfer)

REST is acronym for REpresentational State Transfer. It is architectural style for distributed hypermedia systems.

It is basically a set of guidelines for how a client + server should communicate and perform CRUD operations on a given resource

# AN EXAMPLE W/ COMMENTS

| Name    | PATH               | VERB   | PURPOSE                            |
| ------- | ------------------ | ------ | ---------------------------------- |
| Index   | /comments          | GET    | Display all comments               |
| New     | /comments/new      | GET    | Form to create new comment         |
| Create  | /comments          | POST   | Create new comment on server       |
| Show    | /comments/:id      | GET    | Details for one specific comment   |
| Edit    | /comments/:id/edit | GET    | Form to edit specific comment      |
| Update  | /comments/:id      | PATCH  | Updates specific comment on server |
| Destroy | /comments/:id      | DELETE | Deletes specific item on server    |
