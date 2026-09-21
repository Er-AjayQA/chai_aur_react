import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-white/80">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <ul className="flex gap-2 ml-auto">
            {navItems?.map((nav) =>
              nav.active ? (
                <li key={nav.slug}>
                  <button
                    onClick={() => navigate(nav.slug)}
                    className="inline-block px-6 py-2 text-sm font-semibold text-gray/40 duration-200 hover:text-gray-800 hover:bg-blue-100 rounded-full"
                  >
                    {nav.name}
                  </button>
                </li>
              ) : null,
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
