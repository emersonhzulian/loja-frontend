import { Form, redirect, useNavigate } from "react-router-dom";

export default function DeleteButton({ action }: { action?: string }) {
  return (
    <Form
      method="post"
      action={action}
      onSubmit={(event) => {
        if (!confirm("Please confirm you want to delete this record.")) {
          event.preventDefault();
        }
      }}
    >
      {" "}
      <button type="submit">Delete</button>{" "}
    </Form>
  );
}
