# PosahQ Task 2

## Connection

### localhost:3000

## End Points

### End Point : (Get All Records) *api/*
* GET Request

> ### Create Label
#### End Point : api/create_label
**(Do these settings in Postman)**
* POST Request
* Body
```
{
  "label":"<Name of the label>"
}
```
* JSON application/json
* Send

> ### Update Label
#### End Point : api/update_label/:<labelID>
**(Do these settings in Postman)**
* PUT Request
* Body
```
{
  "label":"<Name of the label>"
}
```
* JSON application/json
* Send

> ### Delete Label
#### End Point : api/delete_label/:<labelID>
**(Do these settings in Postman)**
* Delete Request
* JSON application/json
* Send

#### End Point : api/create_task/:<labelID(under which you want to insert the task)>
**(Do these settings in Postman)**
* POST Request
* Body
```
{
  "task":"<Name of the task>"
}
```
* JSON application/json
* Send

> ### Update Task
#### End Point : api/update_task/:<taskID>
**(Do these settings in Postman)**
* PUT Request
* Body
```
{
  "task":"<Name of the task>"
}
```
* JSON application/json
* Send

> ### Delete Label
#### End Point : api/delete_task/:<taskID>
**(Do these settings in Postman)**
* Delete Request
* JSON application/json
* Send

> ### Move Task
#### End Point : api/move_task/:<taskID>
**(Do these settings in Postman)**
* Put Request
* Body
```
{
  "LabelID":"<new Label ID>"
}
```
* JSON application/json
* Send
