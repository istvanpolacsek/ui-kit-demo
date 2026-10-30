import React from "react";
import styled, { css } from "styled-components";
import { ImageBoxTight } from "../ImageBoxTight";
import { TextBoxTight } from "../TextBoxTight";
import { Stepper } from "../Stepper";
import { ToolbarModule } from "../ToolbarModule";
import { Drag } from "../Drag";

export interface TestimonialBoxRegularProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "hasImage" | "state" | "mode"
> {
  hasImage?: boolean;
  state?: "Default" | "Hover" | "Passive" | "Active";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.article(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    width: 488px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTextBoxTight = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledTextBoxTight2 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledContainer = styled.div(
  () => css`
    position: absolute;
    left: -8px;
    top: -8px;
    width: 504px;
    height: 284px;
    border-radius: 6px;
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -10px;
    width: 508px;
    height: 288px;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 502px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    height: 288px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledAnchor = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 1px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAnchor2 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 1px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: -8px;
    top: -72px;
    width: 304px;
    height: 56px;
  `,
);

const StyledDrag = styled.div(
  () => css`
    position: absolute;
    left: -36px;
    top: -8.0009765625px;
    width: 24px;
    height: 24px;
  `,
);

/** A testimonial card component that displays a user quote, attribution text, and an optional avatar image. Supports light and dark modes, and multiple interaction states (Default, Hover, Passive, Active). */
export const TestimonialBoxRegular = React.forwardRef<
  HTMLElement,
  TestimonialBoxRegularProps
>(function TestimonialBoxRegular(
  { hasImage = true, state = "Default", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot role="article" aria-label="Testimonial" {...rest} ref={ref}>
      {hasImage && (
        <ImageBoxTight
          snaps={false}
          aspectRatio={"1:1"}
          state={"Default"}
          mode={"Light"}
        />
      )}
      <StyledTextBoxTight>
        <TextBoxTight
          reachingLimit={false}
          hasToolbar={false}
          colorOverride={false}
          state={"Default"}
          mode={"Light"}
        />
      </StyledTextBoxTight>
      <StyledTextBoxTight2>
        <TextBoxTight
          reachingLimit={false}
          hasToolbar={false}
          colorOverride={false}
          state={"Default"}
          mode={"Light"}
        />
      </StyledTextBoxTight2>
      <Stepper mode={"Light"} />
      {["Hover", "Active", "Passive"].includes(state) && <StyledContainer />}
      {state === "Active" && (
        <StyledResizeContainer>
          {state === "Active" && <StyledAnchor $mode={mode} />}
          {state === "Active" && <StyledAnchor2 $mode={mode} />}
        </StyledResizeContainer>
      )}
      {state === "Active" && (
        <StyledToolbarModule>
          <ToolbarModule
            isCustomImage={true}
            type={"Testimonial box"}
            mode={"Light"}
          />
        </StyledToolbarModule>
      )}
      {state === "Active" && (
        <StyledDrag>
          <Drag />
        </StyledDrag>
      )}
    </StyledRoot>
  );
});
