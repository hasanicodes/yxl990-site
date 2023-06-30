import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>YXL990</Title>
      <HttpStatusCode code={404} />
      <h1>Full site is coming real soon!</h1>
      <p>
      </p>
    </main>
  );
}
