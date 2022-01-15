import React from "react";

function withTimerImitation(WrappedComponent, delay) {
  return class withTimerImitation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: { isLoading: false },
      };

      this.handlerClick = this.handlerClick.bind(this);

      withTimerImitation.displayName = `withTimerImitation(${getDisplayName(
        WrappedComponent
      )})`;
    }

    handlerClick() {
      const { isLoading } = this.state.data;
      if (!isLoading) {
        this.setState((prevState) => {
          const newState = !prevState.data.isLoading;
          return {
            data: { isLoading: newState },
          };
        });

        setTimeout(
          () =>
            this.setState((prevState) => {
              const newState = !prevState.data.isLoading;
              return {
                data: { isLoading: newState },
              };
            }),
          delay
        );
      }
    }

    render() {
      return (
        <div className="div-flex">
          <button onClick={this.handlerClick} className="button-simulated">
            Имитировать загрузку
          </button>

          <WrappedComponent data={this.state.data} {...this.props} />
        </div>
      );
    }
  };
}

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default withTimerImitation;
