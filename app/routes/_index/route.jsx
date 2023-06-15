import {Link} from "@remix-run/react";

export default function Index() {
  return <h1 className="text-9xl font-bold text-green-700">
  	<Link to="/en/admin">Admin Pagee</Link>
  </h1>;
}
