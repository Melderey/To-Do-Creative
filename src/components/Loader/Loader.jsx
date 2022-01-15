import React from "react";

export default class Loader extends React.Component {
  render() {
    const { isLoading } = this.props.data;

    return (
      <>
        {isLoading ? (
          <div>Подождите, идёт загрузка...</div>
        ) : (
          <div>Данные загружены!</div>
        )}
      </>
    );
  }
}
