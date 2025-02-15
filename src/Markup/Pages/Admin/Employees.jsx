// Import the auth hook
import { useAuth } from "../../../Contexts/AuthContext";
import LoginForm from "../../Components/LoginForm/LoginForm";
// Import the login form component
// import LoginForm from "../../components/LoginForm/LoginForm";
// Import the admin menu component
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
// Import the EmployeesList component
import EmployeesList from "../../Components/Admin/EmployeesList/EmployeesList";
function Employees() {
  // Destructure the auth hook
  const { isLogged, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <div className="container-fluid admin-pages">
            <div className="row">
              <div className="col-md-3 admin-left-side">
                <AdminMenu />
              </div>
              <div className="col-md-9 admin-right-side">
                <EmployeesList />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>You are not authorized to access this page</h1>
        </div>
      );
    }
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Employees;
