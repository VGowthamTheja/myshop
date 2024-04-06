import React from "react";

export default function Page({ ...props }) {
  console.log(props);
  return <div>{props.params.page}</div>;
}
