import * as Styled from "./style";

export type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
}
