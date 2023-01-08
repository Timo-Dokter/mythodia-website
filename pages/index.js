import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-red-900">Hello world!</h1>
      <FontAwesomeIcon icon={icons.faHouse} className="text-xl w-5 pr-5" />
    </>
  );
}
