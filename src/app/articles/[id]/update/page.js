import Form from "@/app/articles/[id]/update/Form";
import React from "react";

const page = async ({ params }) => {
  const data = await getData(params.id);
  console.log(data);

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ul className="error-messages">
              <li>That title is required</li>
            </ul>
            <Form article={data} id={params.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

async function getData(id) {
  const res = await fetch(`${process.env.HOST}:4000/api/articles/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default page;
