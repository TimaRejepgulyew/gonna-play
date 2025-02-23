import { Component } from "react";
import { View, Text } from "react-native";

import type { ComponentType, ReactNode } from "react";


interface FallbackComponentProps {
  error: Error;
  resetError: () => void;
}

function FallbackComponent({
  error,
  resetError,
}: {
  error: Error;
  resetError: () => void;
}) {
  return (
    <View>
      <Text>Error</Text>
    </View>
  );
}

export type Props = {
  children: Exclude<NonNullable<ReactNode>, string | number | boolean>;
  FallbackComponent: ComponentType<FallbackComponentProps>;
  onError?: (error: Error, stackTrace: string) => void;
};

type State = { error: Error | null };

class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static defaultProps: {
    FallbackComponent: ComponentType<FallbackComponentProps>;
  } = {
    FallbackComponent: FallbackComponent,
  };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    if (typeof this.props.onError === "function") {
      this.props.onError(error, info.componentStack);
    }
  }

  resetError: () => void = () => {
    this.setState({ error: null });
  };

  render() {
    const { FallbackComponent: ReceivedFallbackComponent } = this.props;

    if (this.state.error) {
      return (
        <ReceivedFallbackComponent
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
