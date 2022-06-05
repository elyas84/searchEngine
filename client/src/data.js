export const navBarForUser = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "view emloyeers",
    path: "/employeers",
  },
  {
    title: "filter feature",
    path: "/employees/filter",
  },
];

export const navBarForAdmin = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "view emloyeers",
    path: "/employeers",
  },
  {
    title: "filter feature",
    path: "/employees/filter",
  },
  {
    title: "create employee",
    path: "/create-new",
  },
  {
    title: "remove employee",
    path: "/delete-employee",
  },
  {
    title: "edit employee",
    path: "/edit-employee",
  },
];


export const API_desc = [
  {
    title: "GET all employees",
    url : "/employees",
    request: "GET"
  }
  ,
  {
    title: "POST new employee",
    url : "/new",
    request: "POST"
  },
  {
    title: "PUT employee",
    url : "/edit/{id}",
    request: "PUT"
  },
  {
    title: "DELETE employee",
    url : "/{id}",
    request: "DELETE"
  }
]