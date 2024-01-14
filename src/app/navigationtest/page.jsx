"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  const router = useRouter();
  const pathName = usePathname();
  console.log("pathName", pathName);
  const searchParams = useSearchParams();
  console.log("searchParams", searchParams);
  const q = searchParams.get("q");
  console.log("q", q);

  const handleClick = () => {
    console.log("clicked");
    router.push("/");
    //router.replace("/"); //without history
    //router.refresh()
    //router.back()
    //router.forward()
  };

  return (
    <div>
      <Link
        href="/"
        prefetch={false}
      >
        Link to home
      </Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  );
};

export default NavigationTestPage;
