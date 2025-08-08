export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  age: string;
  company: Company;
};

export type Address = {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: Geo;
};

export type Company = {
  name: string;
  catchPhrase: string;
};

export type Geo={
  lat: string,
  lng: string,
}