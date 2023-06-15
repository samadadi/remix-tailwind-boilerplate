/**
 * 
 */
import { json } from "@remix-run/node";

/**
 * 
 */
import { Outlet } from "@remix-run/react";

/**
 * 
 */
export async function loader() {
  const payload = {

  };

  return json(payload);
}

/**
 * 
 */
export default function Language() {
  return (
    <div className="" dir={"ltr"}>
      <div className="flex w-full h-full bg-primary-50 dark:bg-primary-900">
        <Outlet></Outlet>
      </div>
    </div>
  );
}