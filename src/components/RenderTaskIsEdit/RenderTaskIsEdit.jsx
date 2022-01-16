import React from "react";

export default class RenderTaskIsEdit extends React.Component {
  render() {
    const { handlerTaskEdit, newStatusColor, text, isTaskEdit, id } =
      this.props;

    return (
      <>
        {isTaskEdit ? (
          <textarea
            className={`task-text input-render ${newStatusColor}`}
            onChange={(e) => handlerTaskEdit(e, id)}
            value={text}
          ></textarea>
        ) : (
          <div className={`task-text ${newStatusColor}`}>{text}</div>
        )}
      </>
    );
  }
}
