import React from "react";
import styled, { css } from "styled-components";
import { ToolbarButtonNeutral } from "../ToolbarButtonNeutral";
import { Separator } from "../Separator";
import { ToolbarButtonDestructive } from "../ToolbarButtonDestructive";
import { ToolbarButtonColor } from "../ToolbarButtonColor";

export interface ToolbarModuleProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "isCustomImage" | "type" | "mode"
> {
  isCustomImage?: boolean;
  type?:
    | "Text box"
    | "Heading text"
    | "Paragraph text"
    | "Simple text"
    | "Button"
    | "Image simple"
    | "Image tight"
    | "Image caption"
    | "Testimonial box"
    | "Column item"
    | "Embedded media"
    | "Form box"
    | "Process item"
    | "Logo box"
    | "Thumbnail";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 4px;
    padding-bottom: 0px;
    padding-left: 4px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 56px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            border-color: ${"#262626"};
          `;
        case "Dark":
          return css`
            border-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSeparator = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledSeparator2 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledSeparator3 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledActionGroup = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledToolbarButtonColor = styled.li(() => css``);

const StyledToolbarButtonNeutral = styled.li(() => css``);

const StyledToolbarButtonNeutral2 = styled.li(() => css``);

const StyledActionGroup2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledToolbarButtonNeutral3 = styled.li(() => css``);

const StyledToolbarButtonNeutral22 = styled.li(() => css``);

const StyledActionGroup3 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledToolbarButtonNeutral4 = styled.li(() => css``);

const StyledToolbarButtonNeutral23 = styled.li(() => css``);

const StyledToolbarButtonNeutral32 = styled.li(() => css``);

const StyledSeparator4 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledSeparator5 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledActionGroup4 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledToolbarButtonNeutral5 = styled.li(() => css``);

const StyledToolbarButtonNeutral24 = styled.li(() => css``);

const StyledSeparator6 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledAlignment = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledToolbarButtonNeutral6 = styled.li(() => css``);

const StyledToolbarButtonNeutral25 = styled.li(() => css``);

/** A contextual toolbar module that renders a set of action buttons and separators for editing or managing a specific content block type (e.g., text box, image, button, form). The available actions adapt based on the selected content type variant. */
export const ToolbarModule = React.forwardRef<
  HTMLDivElement,
  ToolbarModuleProps
>(function ToolbarModule(
  { isCustomImage = true, type = "Text box", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="toolbar"
      aria-label="Module toolbar"
      {...rest}
      ref={ref}
      $mode={mode}
    >
      {[
        "Text box",
        "Heading text",
        "Paragraph text",
        "Simple text",
        "Image simple",
        "Image tight",
        "Embedded media",
        "Thumbnail",
        "Image caption",
        "Testimonial box",
        "Column item",
        "Form box",
        "Process item",
        "Logo box",
      ].includes(type) && (
        <ToolbarButtonNeutral
          hasIcon={false}
          state={"Default"}
          type={"Icon"}
          dropdown={"False"}
          mode={"Dark"}
        />
      )}
      {[
        "Text box",
        "Heading text",
        "Paragraph text",
        "Simple text",
        "Button",
        "Image simple",
        "Image tight",
        "Embedded media",
        "Image caption",
        "Testimonial box",
        "Column item",
        "Form box",
        "Process item",
        "Logo box",
      ].includes(type) && (
        <StyledSeparator>
          <Separator angle={"Vertical"} mode={"Dark"} />
        </StyledSeparator>
      )}
      {[
        "Text box",
        "Heading text",
        "Paragraph text",
        "Image simple",
        "Thumbnail",
        "Image caption",
      ].includes(type) && (
        <ToolbarButtonNeutral
          hasIcon={true}
          state={"Default"}
          type={"Text"}
          dropdown={"False"}
          mode={"Dark"}
        />
      )}
      {[
        "Text box",
        "Heading text",
        "Paragraph text",
        "Button",
        "Image simple",
        "Image caption",
        "Testimonial box",
      ].includes(type) && (
        <StyledSeparator2>
          <Separator angle={"Vertical"} mode={"Dark"} />
        </StyledSeparator2>
      )}
      {type === "Text box" && (
        <ToolbarButtonNeutral
          hasIcon={true}
          state={"Default"}
          type={"Icon"}
          dropdown={"False"}
          mode={"Dark"}
        />
      )}
      {["Text box", "Heading text", "Paragraph text", "Image caption"].includes(
        type,
      ) && (
        <StyledSeparator3>
          <Separator angle={"Vertical"} mode={"Dark"} />
        </StyledSeparator3>
      )}
      {[
        "Text box",
        "Heading text",
        "Paragraph text",
        "Button",
        "Image simple",
        "Image tight",
        "Embedded media",
        "Testimonial box",
        "Column item",
        "Form box",
        "Process item",
        "Logo box",
      ].includes(type) && (
        <ToolbarButtonDestructive
          state={"Default"}
          type={"Icon"}
          dropdown={"False"}
          mode={"Dark"}
        />
      )}
      {[
        "Heading text",
        "Paragraph text",
        "Simple text",
        "Button",
        "Image caption",
        "Testimonial box",
      ].includes(type) && (
        <StyledActionGroup>
          {[
            "Heading text",
            "Paragraph text",
            "Simple text",
            "Button",
            "Image caption",
          ].includes(type) && (
            <StyledToolbarButtonColor>
              <ToolbarButtonColor
                state={"Default"}
                mode={"Dark"}
                type={"Color"}
              />
            </StyledToolbarButtonColor>
          )}
          {[
            "Heading text",
            "Paragraph text",
            "Simple text",
            "Button",
            "Image caption",
            "Testimonial box",
          ].includes(type) && (
            <StyledToolbarButtonNeutral>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral>
          )}
          {type === "Testimonial box" && (
            <StyledToolbarButtonNeutral2>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral2>
          )}
        </StyledActionGroup>
      )}
      {["Heading text", "Paragraph text", "Image caption"].includes(type) && (
        <StyledActionGroup2>
          {["Heading text", "Paragraph text", "Image caption"].includes(
            type,
          ) && (
            <StyledToolbarButtonNeutral3>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral3>
          )}
          {["Heading text", "Paragraph text", "Image caption"].includes(
            type,
          ) && (
            <StyledToolbarButtonNeutral22>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral22>
          )}
        </StyledActionGroup2>
      )}
      {["Heading text", "Paragraph text"].includes(type) && (
        <StyledActionGroup3>
          {["Heading text", "Paragraph text"].includes(type) && (
            <StyledToolbarButtonNeutral4>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral4>
          )}
          {["Heading text", "Paragraph text"].includes(type) && (
            <StyledToolbarButtonNeutral23>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral23>
          )}
          {["Heading text", "Paragraph text"].includes(type) && (
            <StyledToolbarButtonNeutral32>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral32>
          )}
        </StyledActionGroup3>
      )}
      {["Heading text", "Paragraph text"].includes(type) && (
        <StyledSeparator4>
          <Separator angle={"Vertical"} mode={"Dark"} />
        </StyledSeparator4>
      )}
      {["Heading text", "Paragraph text"].includes(type) && (
        <StyledSeparator5>
          <Separator angle={"Vertical"} mode={"Dark"} />
        </StyledSeparator5>
      )}
      {type === "Paragraph text" && (
        <StyledActionGroup4>
          {type === "Paragraph text" && (
            <StyledToolbarButtonNeutral5>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral5>
          )}
          {type === "Paragraph text" && (
            <StyledToolbarButtonNeutral24>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral24>
          )}
        </StyledActionGroup4>
      )}
      {type === "Paragraph text" && (
        <StyledSeparator6>
          <Separator angle={"Vertical"} mode={"Dark"} />
        </StyledSeparator6>
      )}
      {type === "Button" && (
        <StyledAlignment>
          {type === "Button" && (
            <StyledToolbarButtonNeutral6>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral6>
          )}
          {type === "Button" && (
            <StyledToolbarButtonNeutral25>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                dropdown={"False"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral25>
          )}
        </StyledAlignment>
      )}
    </StyledRoot>
  );
});
