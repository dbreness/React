import ITodo from "./iTodo";

export default interface IUser{
     id : number;
     name :  string;
     username :  string;
     email :  string;
     todos? : ITodo[];
     address : {
       street :  string;
       suite :  string;
       city :  string;
       zipcode :  string;
       geo : {
         lat :  string;
         lng :  string 
      }
    },
     phone :  string;
     website :  string;
  }