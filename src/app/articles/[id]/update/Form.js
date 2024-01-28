"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

const Form = (props) => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["usertoken"]);
  const token = cookies["usertoken"];

  // フォームの状態を管理するための状態変数
  const [title, setTitle] = useState(props.article.article.title);
  const [description, setDescription] = useState(
    props.article.article.description,
  );
  const [body, setBody] = useState(props.article.article.body);
  const [tagList, setTagList] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // FormDataを使用する代わりに、直接JSONを作成
    const articleData = {
      article: {
        title,
        description,
        body,
      },
    };

    const response = await fetch(
      `http://127.0.0.1:4000/api/articles/${props.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      },
    );

    const data = await response.json();
    console.log(data);

    router.push("/");
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        {/* 各フィールドにonChangeイベントハンドラを追加 */}
        <fieldset className="form-group">
          <input
            name="article[title]"
            type="text"
            className="form-control form-control-lg"
            placeholder="Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            name="article[description]"
            type="text"
            className="form-control"
            placeholder="What's this article about?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            name="article[body]"
            className="form-control"
            rows="8"
            placeholder="Write your article (in markdown)"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </fieldset>
        <fieldset className="form-group">
          <input
            name="article[tagList]"
            type="text"
            className="form-control"
            placeholder="Enter tags"
            value={tagList}
            onChange={(e) => setTagList(e.target.value)}
          />
          <div className="tag-list">
            {tagList.split(",").map((tag) => (
              <span key={tag} className="tag-default tag-pill">
                {tag.trim()}
              </span>
            ))}
          </div>
        </fieldset>
        <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
          Publish Article
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
