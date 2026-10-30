import React from "react";
import styled, { css } from "styled-components";
import { SVG_MARKUP } from "./StatusBar.markup";

export interface StatusBarProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children" | "dangerouslySetInnerHTML"
> {}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const StatusBar = React.forwardRef<HTMLSpanElement, StatusBarProps>(
  function StatusBar({ ...rest }, ref) {
    return (
      <StyledRoot
        {...rest}
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: SVG_MARKUP[JSON.stringify([])] ?? "",
        }}
      />
    );
  },
);
