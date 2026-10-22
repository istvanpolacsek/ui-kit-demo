import React from "react";
import styled, { css } from "styled-components";
import { ChevronControl } from "../ChevronControl";
import { CardTestimonial } from "../CardTestimonial";
import { CardTestimonialVideo } from "../CardTestimonialVideo";
import { Button } from "../Button";
import { VideoControl } from "../VideoControl";

export interface TestimonialSliderProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device" | "type"
> {
  device?: "Mobile" | "Desktop";
  type?: "Image" | "Avatar" | "Video" | "Large Image";
}

const StyledRoot = styled.section<{
  $device: "Mobile" | "Desktop";
  $type: "Image" | "Avatar" | "Video" | "Large Image";
}>(
  ({ theme, $device, $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 84px;
            padding-bottom: 48px;
            padding-left: 84px;
            gap: 32px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 20px;
            padding-bottom: 48px;
            padding-left: 20px;
            gap: 32px;
            justify-content: flex-start;
            align-items: center;
            width: 390px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Avatar":
          return css`
            background-color: ${"#f0f4fa"};
          `;
        case "Image":
          return css`
            background-color: ${"#f0f4fa"};
          `;
        case "Video":
          return css`
            background-color: ${"#f0f4fa"};
          `;
        case "Large Image":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        default:
          return css``;
      }
    })()}
  color: #191a1c;
  `,
);

const StyledContent = styled.section<{
  $type: "Image" | "Avatar" | "Video" | "Large Image";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Avatar":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Image":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: 1272px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Video":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: 1272px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Large Image":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: 1272px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitle = styled.header(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledHearFromNUStudentsAndAlumns = styled.h2(
  () => css`
    color: #191a1c;
    font-family: "Georgia";
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
  `,
);

const StyledTestimonials = styled.ul(
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
    gap: 12px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledChevronControl = styled.li(() => css``);

const StyledCardTestimonial = styled.li(() => css``);

const StyledCardTestimonial2 = styled.li(() => css``);

const StyledCardTestimonial3 = styled.li(() => css``);

const StyledChevronControl2 = styled.li(() => css``);

const StyledCardTestimonialVideo = styled.li(() => css``);

const StyledCardTestimonialVideo2 = styled.li(() => css``);

const StyledCTAs = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledTitle2 = styled.header(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 56px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledHearFromNUStudentsAndAlumns2 = styled.h2(
  () => css`
    color: #191a1c;
    font-family: "Georgia";
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
  `,
);

const StyledTestimonials2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCardTestimonial4 = styled.li<{
  $type: "Image" | "Avatar" | "Video" | "Large Image";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Avatar":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Image":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Video":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledControl = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 28px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledVideoControl = styled.li(
  () => css`
    position: absolute;
    left: 204px;
    top: 155.95001220703125px;
    width: 57.600006103515625px;
    height: 57.59999465942383px;
  `,
);

const StyledCTAs2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A testimonial slider section that displays student and alumni testimonials with navigation controls (chevron buttons) and a call-to-action. Supports Desktop and Mobile layouts, and multiple card types including Avatar, Image, Video, and Large Image variants. */
export const TestimonialSlider = React.forwardRef<
  HTMLElement,
  TestimonialSliderProps
>(function TestimonialSlider(
  { device = "Desktop", type = "Avatar", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Testimonials"
      {...rest}
      ref={ref}
      $device={device}
      $type={type}
    >
      {device === "Desktop" && (
        <StyledContent $type={type}>
          {device === "Desktop" && (
            <StyledTitle>
              {device === "Desktop" && (
                <StyledHearFromNUStudentsAndAlumns>
                  {"Hear From NU Students and Alumns"}
                </StyledHearFromNUStudentsAndAlumns>
              )}
            </StyledTitle>
          )}
          {device === "Desktop" && (
            <StyledTestimonials>
              {device === "Desktop" && (
                <StyledChevronControl>
                  <ChevronControl direction={"Left"} state={"Default"} />
                </StyledChevronControl>
              )}
              {((device === "Desktop" && type === "Avatar") ||
                (device === "Desktop" && type === "Image") ||
                (device === "Desktop" && type === "Large Image")) && (
                <StyledCardTestimonial>
                  <CardTestimonial device={"Desktop"} type={"Avatar"} />
                </StyledCardTestimonial>
              )}
              {((device === "Desktop" && type === "Avatar") ||
                (device === "Desktop" && type === "Image")) && (
                <StyledCardTestimonial2>
                  <CardTestimonial device={"Desktop"} type={"Avatar"} />
                </StyledCardTestimonial2>
              )}
              {device === "Desktop" && type === "Avatar" && (
                <StyledCardTestimonial3>
                  <CardTestimonial device={"Desktop"} type={"Avatar"} />
                </StyledCardTestimonial3>
              )}
              {device === "Desktop" && (
                <StyledChevronControl2>
                  <ChevronControl direction={"Right"} state={"Default"} />
                </StyledChevronControl2>
              )}
              {device === "Desktop" && type === "Video" && (
                <StyledCardTestimonialVideo>
                  <CardTestimonialVideo device={"Desktop"} type={"Image"} />
                </StyledCardTestimonialVideo>
              )}
              {device === "Desktop" && type === "Video" && (
                <StyledCardTestimonialVideo2>
                  <CardTestimonialVideo device={"Desktop"} type={"Image"} />
                </StyledCardTestimonialVideo2>
              )}
            </StyledTestimonials>
          )}
          {device === "Desktop" && (
            <StyledCTAs>
              {device === "Desktop" && (
                <Button
                  label={true}
                  bTNValue={"Request Info"}
                  rightIcon={false}
                  leftIcon={false}
                  iconOnly={"False"}
                  device={"Desktop"}
                  size={"Medium"}
                  hierarchy={"Primary"}
                  state={"Default"}
                  type={"Default"}
                />
              )}
            </StyledCTAs>
          )}
        </StyledContent>
      )}
      {device === "Mobile" && (
        <StyledTitle2>
          {device === "Mobile" && (
            <StyledHearFromNUStudentsAndAlumns2>
              {"Hear From NU Students and Alumns"}
            </StyledHearFromNUStudentsAndAlumns2>
          )}
        </StyledTitle2>
      )}
      {device === "Mobile" && (
        <StyledTestimonials2>
          {device === "Mobile" && (
            <StyledCardTestimonial4 $type={type}>
              <CardTestimonial device={"Mobile"} type={"Avatar"} />
            </StyledCardTestimonial4>
          )}
          {device === "Mobile" && (
            <StyledControl>
              {device === "Mobile" && (
                <ChevronControl direction={"Left"} state={"Default"} />
              )}
              {device === "Mobile" && (
                <ChevronControl direction={"Right"} state={"Default"} />
              )}
            </StyledControl>
          )}
          {((device === "Mobile" && type === "Video") ||
            (device === "Mobile" && type === "Large Image")) && (
            <StyledVideoControl>
              <VideoControl type={"Play"} state={"Default"} />
            </StyledVideoControl>
          )}
        </StyledTestimonials2>
      )}
      {device === "Mobile" && (
        <StyledCTAs2>
          {device === "Mobile" && (
            <Button
              label={true}
              bTNValue={"Request Information"}
              rightIcon={false}
              leftIcon={false}
              iconOnly={"False"}
              device={"Mobile"}
              size={"Large"}
              hierarchy={"Primary"}
              state={"Default"}
              type={"Default"}
            />
          )}
        </StyledCTAs2>
      )}
    </StyledRoot>
  );
});
