import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, RatingBar, Heading, Button } from "../../components";
import { NavLink } from "react-router-dom";
import './index.css'

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Aadesh's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pb-1.5 bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1121px] w-full relative">
            <div className="flex flex-row md:flex-col w-[50%] gap-[113px] bottom-0 right-[4%] m-auto md:gap-10 absolute">
              <div className="flex flex-row justify-center w-[43%] md:w-full mt-0.5 p-[9px] md:mt-0 bg-deep_orange-50_01 shadow-xs rounded">
                <div className="flex flex-col items-center justify-start w-full mt-[7px] md:px-5 max-w-[293px]">
                  <div className="flex flex-col items-center justify-start h-[83px] w-[83px] p-2.5 z-[1] bg-white-A700 rounded-[41px]">
                    <Img src="images/img_couple.png" alt="image" className="w-[55px] md:h-auto mt-[7px] object-cover" />
                  </div>
                  <div className="flex flex-row justify-center w-[64%] md:w-full mt-[-1px]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text size="4xl" as="p" className="ml-[69px] md:ml-5 text-center !text-[22.29px] z-[1]">
                        181
                      </Text>
                      <Text size="4xl" as="p" className="mt-[-8px] text-center !text-[22.29px]">
                        Women Helpline
                      </Text>
                    </div>
                  </div>
                  <Text size="xl" as="p" className="mt-[-4px] !text-gray-600_01 text-center !text-[18.95px]">
                    National women helpline number
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-end w-[43%] md:w-full mb-0.5 p-1 bg-blue-50 shadow-xs rounded">
                <div className="flex flex-col items-center justify-start w-[90%] mt-3 mr-3">
                  <div className="flex flex-col items-end justify-center h-[83px] w-[83px] p-[11px] z-[1] bg-white-A700 rounded-[41px]">
                    <Img src="images/img_vector.svg" alt="vector_one" className="h-[43px] mt-[11px] mb-1.5" />
                  </div>
                  <div className="flex flex-row justify-center w-full md:px-5 max-w-[239px]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text size="4xl" as="p" className="text-center !text-[22.29px] z-[1]">
                        1930
                      </Text>
                      <Text size="4xl" as="p" className="mt-[-5px] text-center !text-[22.29px]">
                        Cyber Crime Helpline
                      </Text>
                    </div>
                  </div>
                  <Text size="xl" as="p" className="mt-[-1px] !text-gray-600_01 text-center !text-[18.95px]">
                    You can call this number 24/7 to report financial cyber fraud
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row justify-start w-full">
                  <div className="h-[872px] w-full relative">
                    <Img
                      src="images/img_vector_872x1604.png"
                      alt="vector_one"
                      className="justify-center h-[872px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="h-[451px] w-[30%] sm:w-full mr-[69px] right-[4%] bottom-0 top-0 my-auto md:mr-5 absolute">
                      <div className="justify-center h-[451px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-900 absolute rounded-[50%]" />
                      <div className="flex flex-col items-center justify-center h-max w-max sm:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img
                          src="images/img_vector_423x423.png"
                          alt="vector_three"
                          className="h-[423px] w-[423px] md:h-auto rounded-[50%]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-start w-[18%] right-[36%] top-[28%] p-[7px] m-auto rounded-tl-[23px] rounded-tr-[22px] rounded-bl-[23px] rounded-br-[22px] bg-blue_gray-100_01 absolute">
                      <div className="flex flex-row justify-start items-center w-full mt-1.5 mb-[3px] gap-[11px] md:px-5 max-w-[226px]">
                        <Img
                          src="images/img_emojione_flag_for_india.svg"
                          alt="emojioneflag"
                          className="h-[71px] w-[71px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[64%]">
                          <Text size="8xl" as="p" className="!font-roboto !text-[31.85px]">
                            KYR
                          </Text>
                          <Text size="xl" as="p" className="!font-inter !text-[18.95px]">
                            Know you rights
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start w-[18%] h-max mr-[569px] right-[36%] bottom-0 top-0 p-4 my-auto md:mr-5 bg-blue_gray-100_01 absolute rounded-[22px]">
                      <Img src="images/img_frame_44.svg" alt="image" className="h-[61px] w-[61px] mb-0.5 ml-[3px]" />
                    </div>
                    <Button
                      color="blue_gray_100_01"
                      leftIcon={<Img src="images/img_ionpersonsharp.svg" alt="ion:person-sharp" />}
                      className="gap-[9px] bottom-[28%] right-[35%] m-auto sm:pr-5 font-inter min-w-[273px] absolute rounded-[22px]"
                    >
                      <>
                        Expert legal <br />
                        Advisory
                      </>
                    </Button>

                    {/* <div className="h-[97px] w-full relative">
                      <div className="flex flex-row justify-start w-[90%] h-full left-0 bottom-0 top-0 p-4 my-auto bg-blue_gray-100 absolute rounded-[22px]">
                        <Img
                          src="images/img_frame_44.svg"
                          alt="image_one"
                          className="h-[61px] w-[61px] mb-0.5 ml-[3px]"
                        />
                      </div>
                      <Text
                        size="5xl"
                        as="p"
                        className="right-0 top-[7%] m-auto !font-inter !text-[29.66px] absolute"
                      >
                        Legal Resources
                      </Text>
                    </div>

 */}





                    <div className="flex flex-col items-start justify-start w-[32%] h-max ml-[89px] left-[6%] bottom-0 top-0 my-auto md:ml-5 absolute">
                      <Heading size="s" as="h1" className="ml-px md:ml-0 !text-white-A700 !text-[35.67px]">
                        <>
                          Want to know
                          <br />
                          Don’t know what to do next?
                        </>
                      </Heading>
                      <Text
                        size="3xl"
                        as="p"
                        className="mt-[15px] ml-px md:ml-0 !text-white-A700 !font-baloopaaji !text-[20.06px]"
                      >
                        Consult a Lawyer now.
                      </Text>
                      <div className="flex flex-row justify-start w-full mt-[11px] md:px-5 max-w-[309px]">
                        <div className="flex flex-row justify-start items-center w-full">
                          <div className="flex flex-row justify-start w-[37%]">
                            <div className="flex flex-row justify-start w-full">
                              <div className="flex flex-row justify-start w-[70%]">
                                <Img
                                  src="images/img_ellipse_3.png"
                                  alt="circleimage"
                                  className="h-[44px] w-[44px] md:h-auto rounded-[50%]"
                                />
                                <Img
                                  src="images/img_ellipse_4.png"
                                  alt="circleimage_one"
                                  className="h-[44px] w-[44px] md:h-auto ml-[-10px] rounded-[50%]"
                                />
                              </div>
                              <Img
                                src="images/img_ellipse_5.png"
                                alt="circleimage_two"
                                className="h-[44px] w-[44px] md:h-auto ml-[-10px] rounded-[50%]"
                              />
                            </div>
                          </div>
                          <Text size="s" as="p" className="ml-2.5 !text-white-A700 !font-roboto !text-[15.6px]">
                            +121 Lawyers are online
                          </Text>
                          <div className="h-[11px] w-[11px] ml-[5px] bg-green-A700 rounded-[5px]" />
                        </div>
                      </div>
                      <Button
                        size="xs"
                        shape="round"
                        className="mt-7 sm:px-5 font-roboto font-medium min-w-[190px] sm:min-w-full"
                      >
                        Talk to lawyer
                      </Button>
                    </div>
                    <header className="flex flex-row justify-center items-center w-[96%] top-[5%] right-0 left-0 p-[9px] m-auto bg-deep_orange-50_e5 absolute rounded-[5px]">
                      <div className="flex flex-row md:flex-col justify-between items-center w-full mt-1.5 ml-[15px] md:gap-10 md:px-5 max-w-[1465px]">
                        <div className="flex flex-row justify-start items-start gap-[15px]">
                          <Img src="images/img_frame.svg" alt="image_one" className="h-[64px] mt-0.5" />
                          <Text size="5xl" as="p" className="!text-red-700_01 !text-[27.87px] !font-medium">
                            <>
                              Know Your
                              <br />
                              Rights
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row sm:flex-col justify-between items-center w-[80%] md:w-full mt-2.5 md:mt-0 sm:gap-10">

                          <ul className="navbar-links">
                            <li><NavLink to="/" className="!text-blue_gray-700 !text-[28.98px]" >Home</NavLink></li>
                            <li>
                              <NavLink
                                to="/about"
                                size="6xl" as="p" className="!text-blue_gray-700 !text-[28.98px]"

                              >Helpline
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/services"
                                size="6xl" as="p" className="!text-blue_gray-700 !text-[28.98px]"
                              >News
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/contact"
                                size="6xl" as="p" className="!text-blue_gray-700 !text-[28.98px]"
                              >Maps
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/login"
                                size="6xl" as="p" className="!text-blue_gray-700 !text-[28.98px]"
                              >Login
                              </NavLink>
                            </li>
                          </ul>





                        </div>
                      </div>
                    </header>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start w-[28%] md:w-full mt-[-48px] ml-[39px] md:ml-0 sm:ml-5 z-[1]">
                <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text size="12xl" as="p" className="!text-blue_gray-700 !text-[44.58px]">
                        Know your Rights &
                      </Text>
                      <Heading size="lg" as="h2" className="mt-[-15px] !text-red-700_01 !text-[53.5px]">
                        Live Peaceful life
                      </Heading>
                    </div>
                  </div>
                  <Text size="s" as="p" className="w-[93%] !text-blue_gray-700 !text-[15.6px]">
                    Constitution provide us many rights and we don’t know what are our rights due to which some times we
                    tolerate the wrong things. But after that don’t need to tolerate wrong people and wrong things.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-between items-center w-[53%] bottom-[20%] right-[15%] m-auto md:gap-10 absolute">
              <div className="flex flex-col items-center justify-center w-[40%] md:w-full p-[7px] bg-light_blue-50 shadow-xs rounded">
                <div className="flex flex-col items-start justify-center h-[83px] w-[83px] p-3.5 bg-white-A700 rounded-[41px]">
                  <Img src="images/img_fa6_solid_children.svg" alt="fa6solid_one" className="h-[48px] mt-1" />
                </div>
                <Text size="4xl" as="p" className="mt-px !text-[22.29px] z-[1]">
                  1098
                </Text>
                <Text size="4xl" as="p" className="mt-[-4px] !text-[22.29px]">
                  Child Helpline
                </Text>
                <Text size="xl" as="p" className="w-[91%] mb-px !text-gray-600_01 text-center !text-[18.95px]">
                  It is available 24x7 for children in distress
                </Text>
              </div>
              <div className="flex flex-row justify-center w-[40%] md:w-full">
                <div className="flex flex-row justify-end w-full p-2 bg-red-50 shadow-xs rounded">
                  <div className="flex flex-col items-center justify-start w-[92%] mt-1.5 mr-[5px]">
                    <div className="h-[81px] w-[29%] md:w-full z-[1] relative">
                      <div className="justify-center h-[81px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-[41px]" />
                      <Img
                        src="images/img_vector_teal_400.svg"
                        alt="vector_seven"
                        className="h-[49px] right-[14%] top-[18%] m-auto absolute"
                      />
                    </div>
                    <div className="flex flex-row justify-center w-[23%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text size="4xl" as="p" className="ml-3.5 md:ml-0 !text-[22.29px] z-[1]">
                          112
                        </Text>
                        <Text size="4xl" as="p" className="mt-[-14px] !text-[22.29px]">
                          Police
                        </Text>
                      </div>
                    </div>
                    <Text size="xl" as="p" className="mt-px !text-gray-600_01 text-center !text-[18.95px]">
                      National police helpline number
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full mt-[52px] bg-gray-500" />
          <div className="h-px w-full mt-[-1px] bg-gray-500" />
          <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10 md:px-5 max-w-[1520px]">
            <div className="flex flex-col items-start justify-start w-[64%] md:w-full gap-5">
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="h-[539px] w-full relative">
                    <div className="h-[447px] w-[53%] sm:w-full left-0 bottom-0 top-0 my-auto absolute">
                      <div className="justify-center h-[446px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img
                          src="images/img_vector_white_a700_446x512.svg"
                          alt="vector_nine"
                          className="justify-center h-[446px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <div className="flex flex-col items-start justify-start w-[63%] gap-[37px] left-[7%] top-[5%] m-auto absolute">
                          <div className="flex flex-col w-[90%] gap-[37px]">
                            <div className="flex flex-row justify-between items-start w-[95%] md:w-full mr-4">
                              <div className="h-[49px] w-[21%] relative">
                                <div className="justify-center h-[49px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-indigo-100 absolute rounded-[27px]" />
                                <Img
                                  src="images/img_vector_deep_purple_400.svg"
                                  alt="save_time_and"
                                  className="justify-center h-[31px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                              </div>
                              <Text as="p" className="mt-[11px]">
                                Save Time and Money
                              </Text>
                            </div>
                            <div className="flex flex-row justify-between items-start w-full">
                              <div className="h-[49px] w-[20%] relative">
                                <div className="justify-center h-[49px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-orange-100 absolute rounded-[27px]" />
                                <Img
                                  src="images/img_vector_lime_900_01.svg"
                                  alt="vector_one"
                                  className="h-[25px] w-[25px] mr-3 right-[21%] bottom-0 top-0 my-auto absolute"
                                />
                              </div>
                              <Text as="p" className="mt-[9px]">
                                Best Advise that Matters
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-start w-full">
                            <div className="h-[49px] w-[18%] relative">
                              <div className="justify-center h-[49px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-cyan-100 absolute rounded-[27px]" />
                              <Img
                                src="images/img_vector_teal_600.svg"
                                alt="vector_eleven"
                                className="h-[24px] left-[20%] top-[15%] m-auto absolute"
                              />
                            </div>
                            <Text as="p" className="mt-[9px]">
                              Privat and Confidential Calls
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between items-start w-[65%] md:w-full">
                            <div className="h-[49px] w-[27%] relative">
                              <div className="justify-center h-[49px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-purple-100 absolute rounded-[27px]" />
                              <Img
                                src="images/img_vector_purple_900.svg"
                                alt="vector_thirteen"
                                className="justify-center h-[30px] w-[29px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                            </div>
                            <Text as="p" className="mt-[9px]">
                              Instant Advice
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[36%] bottom-0 right-0 m-auto rounded-tl-[18px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[18px] bg-white-A700 absolute">
                        <Img src="images/img_vector_gray_100.svg" alt="vector_fifteen" className="h-[163px]" />
                      </div>
                      <Img
                        src="images/img_vector_blue_gray_900.svg"
                        alt="vector"
                        className="h-[125px] bottom-[5%] right-[8%] m-auto absolute"
                      />
                    </div>
                    <div className="flex flex-col items-end justify-start w-[82%] bottom-0 right-0 m-auto absolute">
                      <div className="flex flex-row justify-end items-center h-[8px] w-[9px] md:w-full mr-[343px] md:mr-5 z-[1]">
                        <Img src="images/img_search.svg" alt="search_one" className="h-[6px] w-[7px] z-[1]" />
                        <Img
                          src="images/img_vector_blue_100.svg"
                          alt="vector_nineteen"
                          className="h-[8px] w-[9px] ml-[-7px]"
                        />
                      </div>
                      <div className="flex flex-row md:flex-col justify-end items-center w-full md:gap-5">
                        <Img src="images/img_vector_blue_a200_01.svg" alt="vector" className="h-[423px] z-[1]" />
                        <div className="flex flex-col items-start justify-start w-[44%] md:w-full ml-[-1px] gap-7 md:ml-0">
                          <div className="flex flex-row justify-start items-start w-full gap-[15px]">
                            <div className="h-[8px] w-[9px] sm:w-full mt-[41px] relative">
                              <Img
                                src="images/img_vector_blue_100_8x9.svg"
                                alt="vector"
                                className="justify-center h-[8px] w-[9px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <Img
                                src="images/img_search_blue_a200.svg"
                                alt="search_three"
                                className="justify-center h-[6px] w-[7px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                            </div>
                            <div className="h-[93px] w-[93%] sm:w-full relative">
                              <Img
                                src="images/img_group.svg"
                                alt="image_two"
                                className="justify-center h-[93px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <div className="flex flex-row justify-start items-start w-[66%] h-max ml-[19px] gap-[18px] left-[6%] bottom-0 top-0 my-auto absolute">
                                <div className="h-[54px] w-[30%] sm:w-full relative">
                                  <Img
                                    src="images/img_vector_red_a200.svg"
                                    alt="vector"
                                    className="justify-center h-[54px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_group_8.svg"
                                    alt="image_three"
                                    className="h-[37px] mr-1 right-[7%] bottom-0 top-0 my-auto absolute"
                                  />
                                </div>
                                <Text as="p" className="mt-2 !text-red-A200">
                                  Documentation
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_group_8_white_a700.svg"
                            alt="image_four"
                            className="h-[24px] ml-6 md:ml-0 sm:ml-5"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_vector_blue_a200.svg"
                      alt="vector"
                      className="h-[173px] bottom-1/4 left-1/4 m-auto absolute"
                    />
                    <div className="h-[93px] w-[22%] sm:w-full right-[27%] top-0 m-auto absolute">
                      <Img
                        src="images/img_group_gray_100.svg"
                        alt="image_five"
                        className="justify-center h-[93px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                      <div className="flex flex-row justify-start items-start w-[55%] h-max ml-4 gap-[21px] left-[8%] bottom-0 top-0 my-auto absolute">
                        <div className="h-[54px] w-[54%] sm:w-full relative">
                          <Img
                            src="images/img_vector_deep_orange_300.svg"
                            alt="vector"
                            className="justify-center h-[54px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Img
                            src="images/img_vector_white_a700_24x27.svg"
                            alt="vector"
                            className="h-[24px] bottom-[23%] right-[24%] m-auto absolute"
                          />
                        </div>
                        <Text as="p" className="mt-[13px] !text-deep_orange-900">
                          Call
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[8px] w-[9px] md:w-full ml-[177px] md:ml-5 z-[1] relative">
                    <Img
                      src="images/img_vector_blue_100_8x9.svg"
                      alt="vector"
                      className="justify-center h-[8px] w-[9px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <Img
                      src="images/img_search_blue_a200.svg"
                      alt="search_five"
                      className="justify-center h-[6px] w-[7px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[26%] md:w-full ml-[55px] md:ml-5 rounded-tl-[18px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[17px] bg-white-A700">
                <div className="h-[92px] w-full sm:w-full relative">
                  <Img
                    src="images/img_vector_gray_100.svg"
                    alt="vector"
                    className="justify-center h-[92px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <div className="flex flex-row justify-start items-start w-[68%] h-max ml-[17px] gap-6 left-[7%] bottom-0 top-0 my-auto absolute">
                    <div className="h-[54px] w-[37%] sm:w-full relative">
                      <Img
                        src="images/img_vector_teal_600_54x61.svg"
                        alt="vector"
                        className="justify-center h-[54px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                      <Img
                        src="images/img_vector_white_a700_18x27.svg"
                        alt="vector"
                        className="justify-center h-[18px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                    </div>
                    <Text as="p" className="mt-[9px] !text-teal-600">
                      Video Call
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[33%] md:w-full">
              <Text size="9xl" as="p" className="!text-blue_gray-700 !text-[39.81px]">
                Connect with our
              </Text>
              <Heading size="md" as="h2" className="mt-[18px] !text-red-700_01 !text-[47.78px]">
                Legal Advisors
              </Heading>
              <Text size="2xl" as="p" className="mt-[29px] !text-blue_gray-700 !text-[19.91px]">
                Connect with our legal advisors, they will provide you the best advise about your problems and guide you
                for better future and help you in understanding your rights
              </Text>
              <Button
                size="md"
                shape="round"
                className="mt-[29px] sm:px-5 font-roboto font-medium min-w-[253px] !rounded-md sm:min-w-full"
              >
                Talk to lawyer
              </Button>
            </div>
          </div>
          <div className="h-px w-full mt-px bg-gray-500" />
          <div className="flex flex-row justify-center w-full mt-[17px] md:px-5 max-w-[1435px]">
            <div className="flex flex-col items-center justify-start w-full">
              <Text size="13xl" as="p" className="flex !text-blue_gray-700 !text-[46.88px]">
                <span className="text-blue_gray-700">Pick the slot to get </span>
                <span className="text-red-700_01 font-bold">expert solution</span>
              </Text>
              <div className="flex flex-row md:flex-col justify-between items-center w-full mt-3.5 md:gap-10">
                <div className="flex flex-col items-start justify-start w-[35%] md:w-full">
                  <Text size="9xl" as="p" className="!text-blue_gray-700 !text-[39.77px] !font-normal">
                    <>
                      Right legal advice today <br />
                      will save your big <br />
                      cost tomorrow.
                    </>
                  </Text>
                  <div className="flex flex-row justify-between items-center w-[71%] md:w-full mt-[65px]">
                    <div className="h-[56px] w-[18%] bg-orange-50 rounded-[30px]" />
                    <Text size="5xl" as="p" className="!text-blue_gray-700 !font-roboto !text-[27.54px]">
                      73k Calls Connected
                    </Text>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[67%] md:w-full mt-[29px]">
                    <div className="h-[56px] w-[19%] bg-cyan-50 rounded-[30px]" />
                    <Text size="5xl" as="p" className="!text-blue_gray-700 !font-roboto !text-[27.54px]">
                      63k Positive Result
                    </Text>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[72%] md:w-full mt-7">
                    <div className="h-[56px] w-[18%] relative">
                      <div className="justify-center h-[56px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-pink-50 absolute rounded-[30px]" />
                      <Img
                        src="images/img_vector_pink_a100.svg"
                        alt="vector_fortyone"
                        className="justify-center h-[28px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                    </div>
                    <Text size="5xl" as="p" className="!text-blue_gray-700 !font-roboto !text-[27.54px]">
                      4.6/5 Average Rating
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col w-[53%] md:w-full gap-[22px]">
                  <div className="flex flex-row justify-center w-full p-4 border-deep_purple-400 border border-solid bg-deep_purple-400 shadow-xs cursor-pointer rounded-[11px] hover:border-deep_purple-400 hover:border hover:border-solid hover:shadow-xs">
                    <div className="flex flex-row justify-between items-center w-[97%] mb-0.5">
                      <div className="flex flex-row justify-start items-center w-[32%] gap-[17px]">
                        <div className="h-[28px] w-[28px] relative">
                          <div className="justify-center h-[26px] w-[26px] left-0 bottom-0 right-0 top-0 m-auto border-gray-900_02 border-2 border-solid absolute rounded-[50%]" />
                          <div className="flex flex-col items-center justify-center h-full w-full left-0 bottom-0 right-0 top-0 p-[5px] m-auto border-white-A700 border-2 border-solid bg-deep_purple-400 absolute rounded-[50%]">
                            <div className="h-[17px] w-[17px] bg-white-A700 rounded-lg" />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[79%] gap-[7px]">
                          <Text
                            size="3xl"
                            as="p"
                            className="!text-white-A700 !font-roboto !text-[20.03px] !font-medium"
                          >
                            60 Minutes
                          </Text>
                          <Text size="s" as="p" className="!text-white-A700 !font-roboto !text-[15.58px]">
                            Minutes valid for 30 days{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="h-[75px] w-[14%] relative">
                        <Text
                          size="11xl"
                          as="p"
                          className="w-max ml-[7px] left-[8%] bottom-0 top-0 my-auto !text-white-A700 !font-baloopaaji !text-[42.28px] absolute"
                        >
                          ₹20
                        </Text>
                        <Text
                          size="s"
                          as="p"
                          className="w-max bottom-[1%] right-0 left-0 m-auto !text-white-A700 !font-roboto !text-[15.58px] absolute"
                        >
                          ( ₹16.6/ Min )
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full p-[15px] bg-white-A700 shadow-xs cursor-pointer rounded-[11px] hover:border-deep_purple-400 hover:border hover:border-solid hover:shadow-xs">
                    <div className="flex flex-row justify-start items-start w-[31%] ml-3 gap-[18px]">
                      <div className="h-[28px] w-[28px] mt-2.5 border-blue_gray-100_01 border-2 border-solid bg-gray-50 rounded-[50%]" />
                      <div className="flex flex-col items-start justify-start w-[79%] gap-2">
                        <Text size="3xl" as="p" className="!text-gray-900_02 !font-roboto !text-[20.03px]">
                          45 Minutes
                        </Text>
                        <Text size="lg" as="p" className="!text-gray-700_90 !font-roboto !text-[17.8px] opacity-0.6">
                          Minutes valid for 30 days{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[14%] mr-1">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text size="11xl" as="p" className="!text-teal-500 !font-baloopaaji !text-[42.28px]">
                          ₹20
                        </Text>
                        <Text size="s" as="p" className="mt-[-16px] !text-gray-600_01 !font-roboto !text-[15.58px]">
                          ( ₹18.80/ Min )
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full p-[17px] bg-white-A700 shadow-xs cursor-pointer rounded-[11px] hover:border-deep_purple-400 hover:border hover:border-solid hover:shadow-xs">
                    <div className="flex flex-row justify-start items-start w-[32%] ml-2.5 gap-[18px]">
                      <div className="h-[28px] w-[28px] mt-2.5 border-blue_gray-100_01 border-2 border-solid bg-gray-50 rounded-[50%]" />
                      <div className="flex flex-col items-start justify-start w-[79%] gap-2">
                        <Text size="3xl" as="p" className="!text-gray-900_02 !font-roboto !text-[20.03px]">
                          30 Minutes
                        </Text>
                        <Text size="lg" as="p" className="!text-gray-700_90 !font-roboto !text-[17.8px] opacity-0.6">
                          Minutes valid for 30 days{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="h-[75px] w-[15%] mr-0.5 relative">
                      <Text
                        size="11xl"
                        as="p"
                        className="w-max ml-2 left-[9%] bottom-0 top-0 my-auto !text-teal-500 !font-baloopaaji !text-[42.28px] absolute"
                      >
                        ₹20
                      </Text>
                      <Text
                        size="s"
                        as="p"
                        className="w-max bottom-[2%] right-0 left-0 m-auto !text-gray-600_01 !font-roboto !text-[15.58px] absolute"
                      >
                        ( ₹23.30/ Min )
                      </Text>
                    </div>
                  </div>
                  <div className="h-[111px] w-full cursor-pointer relative hover:border-deep_purple-400 hover:border hover:border-solid hover:shadow-xs">
                    <div className="flex flex-row justify-between items-center w-full h-full left-0 bottom-0 right-0 top-0 p-4 m-auto bg-white-A700 shadow-xs absolute rounded-[11px]">
                      <div className="flex flex-row justify-start items-start w-[31%] ml-[11px] gap-[18px]">
                        <div className="h-[28px] w-[28px] mt-2.5 border-blue_gray-100_01 border-2 border-solid bg-gray-50 rounded-[50%]" />
                        <div className="flex flex-col items-start justify-start w-[79%] gap-2">
                          <Text size="3xl" as="p" className="!text-gray-900_02 !font-roboto !text-[20.03px]">
                            15 Minutes
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-700_90 !font-roboto !text-[17.8px] opacity-0.6">
                            Minutes valid for 30 days{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="h-[75px] w-[14%] mt-[3px] mr-1 relative">
                        <Text
                          size="11xl"
                          as="p"
                          className="w-max ml-2 left-[9%] bottom-0 top-0 my-auto !text-teal-500 !font-baloopaaji !text-[42.28px] absolute"
                        >
                          ₹20
                        </Text>
                        <Text
                          size="s"
                          as="p"
                          className="w-max bottom-[3%] right-0 left-0 m-auto !text-gray-600_01 !font-roboto !text-[15.58px] absolute"
                        >
                          ( ₹33.20/ Min )
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_vector_white_a700_39x50.svg"
                      alt="vector_one"
                      className="h-[39px] top-[22%] right-0 left-0 m-auto absolute"
                    />
                    <div className="flex flex-col items-center justify-start w-[4%] gap-[3px] top-[34%] right-0 left-0 m-auto absolute">
                      <Img src="images/img_vector_white_a700_5x27.svg" alt="vector_three" className="h-[5px]" />
                      <Img src="images/img_vector_white_a700_11x26.svg" alt="vector_five" className="h-[11px]" />
                    </div>
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                shape="round"
                className="mt-[59px] sm:px-5 font-roboto font-medium min-w-[288px] !rounded-[5px] sm:min-w-full"
              >
                Pick & Connect Now
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[38px]">
            <div className="h-px w-full bg-gray-500" />
            <Heading size="xl" as="h2" className="mt-6 !text-red-700_01 text-center !text-[63.23px]">
              Select your problem category
            </Heading>
            <div className="h-[559px] w-full mt-[41px] md:px-5 relative max-w-[1543px]">
              <Img
                src="images/img_group_1980.svg"
                alt="image_six"
                className="justify-center h-[559px] left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
              <div className="flex flex-col items-end justify-start w-[50%] left-[4%] top-[6%] m-auto absolute">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="h-[87px] w-[12%] ml-[63px] md:ml-5 z-[1] bg-pink-50 rounded-md" />
                  <div className="flex flex-row md:flex-col justify-start items-start w-full mt-[-71px] md:gap-5">
                    <Text size="15xl" as="p" className="mt-[94px] md:mt-0 !text-[51.32px]">
                      Criminal
                    </Text>
                    <div className="h-[320px] w-[91%] md:w-full ml-[-146px] md:ml-0 relative">
                      <Img
                        src="images/img_group_1988.svg"
                        alt="image_seven"
                        className="justify-center h-[320px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                      <Img
                        src="images/img_vector_purple_300.svg"
                        alt="vector"
                        className="h-[48px] left-0 top-[1%] m-auto absolute"
                      />
                      <Img
                        src="images/img_vector_purple_900_48x73.svg"
                        alt="vector"
                        className="h-[48px] bottom-[3%] right-0 left-0 m-auto absolute"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[87px] w-[12%] mt-[-75px] mr-[301px] md:mr-5 z-[1] bg-red-A200 rounded-md" />
              </div>
              <Text size="15xl" as="p" className="bottom-[17%] left-[23%] m-auto !text-[51.32px] absolute">
                Education
              </Text>
              <Text size="15xl" as="p" className="bottom-[15%] right-[24%] m-auto !text-[51.32px] absolute">
                Child
              </Text>
              <div className="flex flex-col items-center justify-start w-[6%] bottom-[32%] right-1/4 m-auto absolute">
                <Img src="images/img_group_1995.svg" alt="image_eight" className="h-[87px] z-[1]" />
                <div className="h-[87px] w-full mt-[-87px] bg-deep_orange-300 rounded-md" />
              </div>
              <div className="flex flex-row justify-between items-start w-[29%] right-[3%] top-[6%] m-auto absolute">
                <div className="flex flex-col items-end justify-start w-[25%] gap-[22px]">
                  <div className="flex flex-row justify-start w-[84%] md:w-full mr-1.5 p-[13px] bg-purple-100 rounded-md">
                    <Img src="images/img_vector_indigo_300.svg" alt="vector" className="h-[53px] mt-[3px] mb-[5px]" />
                  </div>
                  <Text size="15xl" as="p" className="!text-[51.32px]">
                    Civil
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[40%] gap-[29px]">
                  <div className="flex flex-row justify-center ml-[33px] p-[13px] md:ml-0 sm:ml-5 bg-indigo-100 rounded-md">
                    <Img src="images/img_vector_deep_purple_900.svg" alt="vector" className="h-[46px] mt-[5px] mb-2" />
                  </div>
                  <Text size="15xl" as="p" className="!text-[51.32px]">
                    Family
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[17%] gap-[73px] right-[39%] top-[6%] m-auto absolute">
                <div className="flex flex-col items-start justify-start w-[65%] md:w-full ml-9 gap-[22px] md:ml-0 sm:ml-5">
                  <div className="h-[87px] w-[56%] ml-[27px] md:ml-0 sm:ml-5 bg-cyan-50 rounded-md" />
                  <Text size="15xl" as="p" className="!text-[51.32px]">
                    Traffic
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="h-[87px] w-[36%] ml-[66px] md:ml-5 z-[1] bg-blue_gray-300_aa rounded-md" />
                    <Text size="15xl" as="p" className="mt-[-13px] !text-[51.32px]">
                      Health & care
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[10%] gap-[5px] bottom-[17%] right-[4%] m-auto absolute">
                <div className="flex flex-row justify-end w-[63%] md:w-full p-1 bg-teal-300 rounded-md">
                  <Img src="images/img_vector_lime_800.svg" alt="vector_fiftyone" className="h-[47px] mt-4 mb-[15px]" />
                </div>
                <Text size="15xl" as="p" className="!text-[51.32px]">
                  Other
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[14%] gap-[29px] left-[24%] top-[6%] m-auto absolute">
                <div className="flex flex-row justify-start w-[44%] md:w-full p-[11px] bg-orange-50 rounded-md">
                  <Img src="images/img_vector_indigo_300_59x59.svg" alt="vector" className="h-[59px] w-[59px] mt-1.5" />
                </div>
                <Text size="15xl" as="p" className="!text-[51.32px]">
                  Housing
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[18%] gap-1.5 bottom-[17%] left-[2%] m-auto absolute">
                <div className="h-[87px] w-[34%] bg-indigo-300_01 rounded-md" />
                <Text size="15xl" as="p" className="!text-[51.32px]">
                  Consumer
                </Text>
              </div>
            </div>
          </div>
          <div className="h-px w-full mt-[75px] bg-gray-500" />
          <Text size="14xl" as="p" className="flex w-[46%] mt-[13px] !text-blue_gray-700 text-center !text-[50.96px]">
            <span className="text-blue_gray-700">
              <>
                Feedback Stories
                <br />
              </>
            </span>
            <span className="text-red-700_01 font-bold">To Know About Our Lawyers</span>
          </Text>
          <div className="flex flex-row md:flex-col w-full mt-[27px] gap-[46px] md:px-5 max-w-[1516px]">
            <div className="flex flex-col items-center justify-start h-[475px] w-[32%] md:w-full sm:h-auto">
              <div className="flex flex-col items-center justify-start h-[475px] w-[475px] sm:w-full sm:h-auto">
                <Img
                  src="images/img_ellipse_49.png"
                  alt="yogesh_arora"
                  className="h-[164px] w-[37%] md:h-auto sm:w-full z-[1] rounded-[50%]"
                />
                <div className="flex flex-col items-center justify-end w-full mt-[-89px] p-1.5 bg-gray-300 shadow-xs">
                  <div className="flex flex-row justify-center w-[50%] md:w-full mt-[93px]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Heading as="h2" className="!text-[33.33px]">
                        Yogesh Arora
                      </Heading>
                      <Heading as="h3" className="mt-[-50px] !text-[33.33px]">
                        Yogesh Arora
                      </Heading>
                    </div>
                  </div>
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#f5bf11"
                    activeColor="#f5bf11"
                    size={30}
                    className="flex justify-between mt-[3px]"
                  />
                  <Text size="xl" as="p" className="w-[97%] mt-[39px] mb-9 !text-gray-900_02 !text-[18.57px]">
                    Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar
                    facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque. Eleifend elit.
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-[477px] w-[31%] md:w-full relative">
              <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Img
                  src="images/img_ellipse_49.png"
                  alt="circleimage"
                  className="h-[164px] w-[38%] md:h-auto sm:w-full mr-[134px] md:mr-5 z-[1] rounded-[50%]"
                />
                <div className="flex flex-col items-center justify-start w-full mt-[-87px] gap-[3px] px-14 py-[99px] md:p-5 bg-gray-300 shadow-xs">
                  <Heading as="h4" className="!text-[33.33px]">
                    Yogesh Arora
                  </Heading>
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#f5bf11"
                    activeColor="#f5bf11"
                    size={30}
                    className="flex justify-between mb-[117px]"
                  />
                </div>
              </div>
              <Text
                size="xl"
                as="p"
                className="w-[97%] bottom-[9%] right-0 left-0 m-auto !text-gray-900_02 !text-[18.57px] absolute"
              >
                Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar
                facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque. Eleifend elit.
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[32%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_ellipse_49.png"
                  alt="circleimage"
                  className="h-[164px] w-[36%] md:h-auto sm:w-full z-[1] rounded-[50%]"
                />
                <div className="flex flex-col items-center justify-end w-full mt-[-87px] p-4 bg-gray-300 shadow-xs">
                  <Heading as="h5" className="mt-[81px] !text-[33.33px]">
                    Yogesh Arora
                  </Heading>
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#f5bf11"
                    activeColor="#f5bf11"
                    size={30}
                    className="flex justify-between mt-1"
                  />
                  <Text size="xl" as="p" className="mt-[38px] mb-7 !text-gray-900_02 !text-[18.57px]">
                    Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar
                    facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque. Eleifend elit.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[902px] w-full mt-[233px] relative">
            <Img
              src="images/img_image_2.png"
              alt="imagetwo_one"
              className="justify-center h-[901px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.4 object-cover absolute"
            />
            <div className="flex flex-col items-center justify-start w-full gap-[69px] bottom-0 right-0 left-0 m-auto absolute">
              <div className="flex flex-col items-center justify-start w-full gap-[108px] md:px-5 max-w-[1100px]">
                <Text size="10xl" as="p" className="!text-blue_gray-700 text-center">
                  Why choose us
                </Text>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                      <div className="flex flex-col items-end justify-start gap-3">
                        <Text as="p" className="mr-px !font-roboto text-right">
                          Economic
                        </Text>
                        <Text size="xs" as="p" className="text-right">
                          Lorem ipsum dolor sit amet consectetur
                        </Text>
                      </div>
                      <div className="h-[83px] w-[8%] md:w-full relative">
                        <div className="justify-center h-[83px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-blue_gray-700 absolute rounded-[50%]" />
                        <Img
                          src="images/img_vector_white_a700_39x39.svg"
                          alt="vector"
                          className="justify-center h-[39px] w-[39px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-3">
                        <Text as="p" className="!font-roboto">
                          Time
                        </Text>
                        <Text size="xs" as="p">
                          Lorem ipsum dolor sit amet consectetur
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5">
                      <div className="flex flex-col items-end justify-start w-[26%] md:w-full mt-14 gap-3 md:mt-0">
                        <Text as="p" className="mr-px !font-roboto text-right">
                          Professional
                        </Text>
                        <div className="flex flex-col items-end justify-start w-full">
                          <Text size="xs" as="p" className="text-right">
                            Lorem ipsum dolor sit amet consectetur
                          </Text>
                          <Text as="p" className="mt-[124px] !font-roboto text-right">
                            Security
                          </Text>
                          <Text size="xs" as="p" className="mt-2.5 text-right">
                            Lorem ipsum dolor sit amet consectetur
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[34%] md:w-full ml-10 md:ml-0 sm:ml-5 z-[1]">
                        <div className="flex flex-row justify-center items-center w-full">
                          <div className="h-[88px] w-[23%] sm:w-full z-[1] relative">
                            <div className="justify-center h-[88px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-blue_gray-700 absolute rounded-[50%]" />
                            <Img
                              src="images/img_security.svg"
                              alt="security_two"
                              className="h-[49px] ml-3.5 left-[17%] bottom-0 top-0 my-auto absolute"
                            />
                          </div>
                          <div className="flex flex-row justify-center items-start w-[94%] ml-[-56px]">
                            <div className="h-[88px] w-[24%] sm:w-full mt-[42px] z-[1] relative">
                              <div className="justify-center h-[88px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-blue_gray-700 absolute rounded-[50%]" />
                              <Img
                                src="images/img_vector_white_a700_50x45.svg"
                                alt="vector"
                                className="justify-center h-[50px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                            </div>
                            <Img
                              src="images/img_frame_blue_gray_700.svg"
                              alt="image_nine"
                              className="h-[393px] ml-[-6px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[38%] md:w-full mt-[42px] ml-[-1px] gap-[86px] md:gap-10 md:ml-0 md:mt-0">
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="h-[88px] w-[20%] relative">
                            <div className="justify-center h-[88px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-blue_gray-700 absolute rounded-[50%]" />
                            <Img
                              src="images/img_vector_white_a700_52x52.svg"
                              alt="image"
                              className="justify-center h-[52px] w-[52px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start mt-3.5 gap-3">
                            <Text as="p" className="!font-roboto">
                              24*7
                            </Text>
                            <Text size="xs" as="p">
                              Lorem ipsum dolor sit amet consectetur
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-start w-[96%] md:w-full ml-[17px]">
                          <div className="h-[88px] w-[21%] relative">
                            <div className="justify-center h-[88px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-blue_gray-700 absolute rounded-[50%]" />
                            <Img
                              src="images/img_group_1986.svg"
                              alt="image"
                              className="justify-center h-[86px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start mt-3.5 gap-3">
                            <Text as="p" className="!font-roboto">
                              User satisfaction
                            </Text>
                            <Text size="xs" as="p">
                              Lorem ipsum dolor sit amet consectetur
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-gray-300_01" />
            </div>
          </div>
          <Text size="xs" as="p" className="mt-1 text-center !font-light">
            © 1998-2019 Copyright | All Rights Reserved.
          </Text>
        </div>
      </div>
    </>
  );
}
