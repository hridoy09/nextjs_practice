"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Stories from "@/components/feed/Stories";
import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";

const stories = [
  {
    id: 1,
    label: "Amina",
    image: "/assets/images/slider1.png",
    avatar: "/assets/images/people1.png",
  },
  {
    id: 2,
    label: "Rahman",
    image: "/assets/images/slider2.png",
    avatar: "/assets/images/people2.png",
  },
  {
    id: 3,
    label: "Sarah",
    image: "/assets/images/slider3.png",
    avatar: "/assets/images/people3.png",
  },
  {
    id: 4,
    label: "John",
    image: "/assets/images/slider4.png",
    avatar: "/assets/images/profile-1.png",
  },
];

const posts = [
  {
    id: 1,
    author: "Radovan SkillArena",
    time: "21m ago",
    avatar: "/assets/images/txt_img.png",
    image: "/assets/images/post_img.png",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    likes: 198,
    comments: 24,
  },
  {
    id: 2,
    author: "Steve Jobs",
    time: "42m ago",
    avatar: "/assets/images/profile-1.png",
    image: "/assets/images/feed_event1.png",
    content:
      "An admin changed the name of the group and the timeline is now reflecting the latest activity.",
    likes: 76,
    comments: 11,
  },
];

const leftPeople = [
  {
    id: 1,
    name: "Radovan SkillArena",
    title: "Founder & CEO at Trophy",
    image: "/assets/images/Avatar.png",
  },
  {
    id: 2,
    name: "Dylan Field",
    title: "CEO of Figma",
    image: "/assets/images/people3.png",
  },
];

const friends = [
  {
    id: 1,
    name: "Steve Jobs",
    title: "CEO of Apple",
    image: "/assets/images/people1.png",
    active: false,
    time: "5 minute ago",
  },
  {
    id: 2,
    name: "Ryan Roslansky",
    title: "CEO of Linkedin",
    image: "/assets/images/people2.png",
    active: true,
  },
  {
    id: 3,
    name: "Dylan Field",
    title: "CEO of Figma",
    image: "/assets/images/people3.png",
    active: true,
  },
  {
    id: 4,
    name: "Steve Jobs",
    title: "CEO of Apple",
    image: "/assets/images/people1.png",
    active: false,
    time: "5 minute ago",
  },
];

const notifications = [
  {
    id: 1,
    image: "/assets/images/friend-req.png",
    text: "Steve Jobs posted a link in your timeline.",
    time: "42 minutes ago",
  },
  {
    id: 2,
    image: "/assets/images/profile-1.png",
    text: "An admin changed the name of the group Freelacer usa.",
    time: "42 minutes ago",
  },
];

export default function FeedPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);

  return (
    <div className={`_layout _layout_main_wrapper ${darkMode ? "_dark_wrapper" : ""}`}>
      <div className="_layout_mode_swithing_btn">
        <button
          type="button"
          className="_layout_swithing_btn_link"
          onClick={() => setDarkMode((value) => !value)}
        >
          <div className="_layout_swithing_btn">
            <div className="_layout_swithing_btn_round" />
          </div>
          <div className="_layout_change_btn_ic1">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
              <path fill="#fff" d="M2.727 14.977l.04-.498-.04.498zm-1.72-.49l.489-.11-.489.11zM3.232 1.212L3.514.8l-.282.413zM9.792 8a6.5 6.5 0 00-6.5-6.5v-1a7.5 7.5 0 017.5 7.5h-1zm-6.5 6.5a6.5 6.5 0 006.5-6.5h1a7.5 7.5 0 01-7.5 7.5v-1zm-.525-.02c.173.013.348.02.525.02v1c-.204 0-.405-.008-.605-.024l.08-.997zm-.261-1.83A6.498 6.498 0 005.792 7h1a7.498 7.498 0 01-3.791 6.52l-.495-.87zM5.792 7a6.493 6.493 0 00-2.841-5.374L3.514.8A7.493 7.493 0 016.792 7h-1zm-3.105 8.476c-.528-.042-.985-.077-1.314-.155-.316-.075-.746-.242-.854-.726l.977-.217c-.028-.124-.145-.09.106-.03.237.056.6.086 1.165.131l-.08.997zm.314-1.956c-.622.354-1.045.596-1.31.792a.967.967 0 00-.204.185c-.01.013.027-.038.009-.12l-.977.218a.836.836 0 01.144-.666c.112-.162.27-.3.433-.42.324-.24.814-.519 1.41-.858L3 13.52zM3.292 1.5a.391.391 0 00.374-.285A.382.382 0 003.514.8l-.563.826A.618.618 0 012.702.95a.609.609 0 01.59-.45v1z" />
            </svg>
          </div>
          <div className="_layout_change_btn_ic2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4.389" stroke="#fff" transform="rotate(-90 12 12)" />
              <path
                stroke="#fff"
                strokeLinecap="round"
                d="M3.444 12H1M23 12h-2.444M5.95 5.95L4.222 4.22M19.778 19.779L18.05 18.05M12 3.444V1M12 23v-2.445M18.05 5.95l1.728-1.729M4.222 19.779L5.95 18.05"
              />
            </svg>
          </div>
        </button>
      </div>

      <div className="_main_layout">
        <nav className="navbar navbar-expand-lg navbar-light _header_nav _padd_t10">
          <div className="container _custom_container">
            <div className="_logo_wrap">
              <Link className="navbar-brand" href="/feed">
                <Image
                  src="/assets/images/logo.svg"
                  alt="Buddy Script"
                  width={138}
                  height={38}
                  className="_nav_logo"
                />
              </Link>
            </div>

            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="_header_form ms-auto">
                <form className="_header_form_grp">
                  <svg className="_header_form_svg" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#666" />
                    <path stroke="#666" strokeLinecap="round" d="M16 16l-3-3" />
                  </svg>
                  <input
                    className="form-control me-2 _inpt1"
                    type="search"
                    placeholder="input search text"
                    aria-label="Search"
                  />
                </form>
              </div>

              <ul className="navbar-nav mb-2 mb-lg-0 _header_nav_list ms-auto _mar_r8">
                <li className="nav-item _header_nav_item">
                  <Link className="nav-link _header_nav_link_active _header_nav_link" href="/feed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                      <path className="_home_active" stroke="#000" strokeWidth="1.5" strokeOpacity=".6" d="M1 9.924c0-1.552 0-2.328.314-3.01.313-.682.902-1.187 2.08-2.196l1.143-.98C6.667 1.913 7.732 1 9 1c1.268 0 2.333.913 4.463 2.738l1.142.98c1.179 1.01 1.768 1.514 2.081 2.196.314.682.314 1.458.314 3.01v4.846c0 2.155 0 3.233-.67 3.902-.669.67-1.746.67-3.901.67H5.57c-2.155 0-3.232 0-3.902-.67C1 18.002 1 16.925 1 14.77V9.924z" />
                      <path className="_home_active" stroke="#000" strokeOpacity=".6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.857 19.341v-5.857a1 1 0 00-1-1H7.143a1 1 0 00-1 1v5.857" />
                    </svg>
                  </Link>
                </li>
                <li className="nav-item _header_nav_item">
                  <Link className="nav-link _header_nav_link" href="#friends">
                    Friends
                  </Link>
                </li>
                <li className="nav-item _header_nav_item">
                  <button
                    type="button"
                    id="_notify_btn"
                    className="nav-link _header_nav_link _header_notify_btn"
                    onClick={() => setNotifyOpen((value) => !value)}
                  >
                    <span className="_counting">6</span>
                    <span>Notifications</span>
                  </button>

                  <div id="_notify_drop" className={`_notification_dropdown ${notifyOpen ? "show" : ""}`}>
                    <div className="_notifications_content">
                      <h4 className="_notifications_content_title">Notifications</h4>
                      <div className="_notification_box_right">
                        <button type="button" className="_notification_box_right_link">
                          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" viewBox="0 0 4 17" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                            <circle cx="2" cy="8" r="2" fill="#C4C4C4" />
                            <circle cx="2" cy="15" r="2" fill="#C4C4C4" />
                          </svg>
                        </button>
                        <div className="_notifications_drop_right">
                          <ul className="_notification_list">
                            <li className="_notification_item">
                              <span className="_notification_link">Mark as all read</span>
                            </li>
                            <li className="_notification_item">
                              <span className="_notification_link">Notification settings</span>
                            </li>
                            <li className="_notification_item">
                              <span className="_notification_link">Open Notifications</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="_notifications_drop_box">
                      <div className="_notifications_drop_btn_grp">
                        <button className="_notifications_btn_link">All</button>
                        <button className="_notifications_btn_link1">Unread</button>
                      </div>

                      <div className="_notifications_all">
                        {notifications.map((item) => (
                          <div key={item.id} className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src={item.image}
                                alt="Notification"
                                width={44}
                                height={44}
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                {item.text}
                              </p>
                              <div className="_nitification_time">
                                <span>{item.time}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="_feed_wrapper">
          <div className="container _custom_container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="_layout_left_sidebar_wrap">
                  <div className="_feed_inner_area _padd_t24 _padd_b24 _padd_r24 _padd_l24 _b_radious6">
                    <div className="_left_inner_area_explore_item">
                      <h4 className="_title5">About</h4>
                      <span className="_left_inner_area_explore_link_txt">3</span>
                    </div>
                    <div className="_layout_left_about_inner_info _mar_b20">
                      <Image src="/assets/images/Avatar.png" alt="" width={40} height={40} className="_info_img1" />
                      <div className="_layout_left_about_inner_info_txt">
                        <h5 className="_layout_left_about_inner_info_title">Buddy Script</h5>
                        <p className="_layout_left_about_inner_info_para">Social feed master template</p>
                      </div>
                    </div>
                    <div className="_layout_left_about_inner_info _mar_b20">
                      <Image src="/assets/images/recommend1.png" alt="" width={40} height={40} className="_info_img1" />
                      <div className="_layout_left_about_inner_info_txt">
                        <h5 className="_layout_left_about_inner_info_title">Design updates</h5>
                        <p className="_layout_left_about_inner_info_para">Weekly UI refreshes</p>
                      </div>
                    </div>
                    <div className="_layout_left_about_inner_info">
                      <Image src="/assets/images/recommend2.png" alt="" width={40} height={40} className="_info_img1" />
                      <div className="_layout_left_about_inner_info_txt">
                        <h5 className="_layout_left_about_inner_info_title">React app</h5>
                        <p className="_layout_left_about_inner_info_para">Next.js social layout</p>
                      </div>
                    </div>
                  </div>

                  <div className="_feed_inner_area _padd_t24 _padd_b24 _padd_r24 _padd_l24 _b_radious6">
                    <div className="_left_inner_area_explore_item">
                      <h4 className="_title5">Suggested</h4>
                      <span className="_left_inner_area_explore_link_txt">2</span>
                    </div>
                    {leftPeople.map((item) => (
                      <div key={item.id} className="_layout_right_sidebar_inner_info">
                        <div className="_layout_right_sidebar_inner_info_box">
                          <div className="_layout_right_sidebar_inner_info_box_image">
                            <Image src={item.image} alt={item.name} width={40} height={40} className="_layout_info_img" />
                          </div>
                          <div>
                            <h5 className="_layout_right_sidebar_inner_info_box_title">{item.name}</h5>
                            <p className="_layout_right_sidebar_inner_info_box_para">{item.title}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="_layout_middle_wrap">
                  <Stories items={stories} />
                  <CreatePost />

                  <div className="_feed_inner_area _padd_t24 _padd_b24 _padd_r24 _padd_l24 _b_radious6">
                    <div className="_left_inner_area_explore_item">
                      <h4 className="_title5">Timeline</h4>
                      <span className="_left_inner_area_explore_link_txt">2</span>
                    </div>
                  </div>

                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="_layout_right_sidebar_wrap">
                  <div className="_layout_right_sidebar_inner">
                    <div className="_right_inner_area_info _padd_t24 _padd_b24 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                      <div className="_right_inner_area_info_content _mar_b24">
                        <h4 className="_right_inner_area_info_content_title _title5">You Might Like</h4>
                        <span className="_right_inner_area_info_content_txt">
                          <a className="_right_inner_area_info_content_txt_link" href="#0">See All</a>
                        </span>
                      </div>
                      <hr className="_underline" />
                      <div className="_right_inner_area_info_ppl">
                        <div className="_right_inner_area_info_box">
                          <div className="_right_inner_area_info_box_image">
                            <Link href="/profile">
                              <Image src="/assets/images/Avatar.png" alt="Image" width={50} height={50} className="_ppl_img" />
                            </Link>
                          </div>
                          <div className="_right_inner_area_info_box_txt">
                            <Link href="/profile">
                              <h4 className="_right_inner_area_info_box_title">Radovan SkillArena</h4>
                            </Link>
                            <p className="_right_inner_area_info_box_para">Founder & CEO at Trophy</p>
                          </div>
                        </div>
                        <div className="_right_info_btn_grp">
                          <button type="button" className="_right_info_btn_link">Ignore</button>
                          <button type="button" className="_right_info_btn_link _right_info_btn_link_active">Follow</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="_layout_right_sidebar_inner" id="friends">
                    <div className="_feed_right_inner_area_card _padd_t24 _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                      <div className="_feed_top_fixed">
                        <div className="_feed_right_inner_area_card_content _mar_b24">
                          <h4 className="_feed_right_inner_area_card_content_title _title5">Your Friends</h4>
                          <span className="_feed_right_inner_area_card_content_txt">
                            <a className="_feed_right_inner_area_card_content_txt_link" href="#0">See All</a>
                          </span>
                        </div>
                        <form className="_feed_right_inner_area_card_form">
                          <svg className="_feed_right_inner_area_card_form_svg" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <circle cx="7" cy="7" r="6" stroke="#666" />
                            <path stroke="#666" strokeLinecap="round" d="M16 16l-3-3" />
                          </svg>
                          <input className="form-control me-2 _feed_right_inner_area_card_form_inpt" type="search" placeholder="input search text" aria-label="Search" />
                        </form>
                      </div>
                      <div className="_feed_bottom_fixed">
                        {friends.map((friend) => (
                          <div
                            key={friend.id}
                            className={`_feed_right_inner_area_card_ppl ${friend.active ? "" : "_feed_right_inner_area_card_ppl_inactive"}`}
                          >
                            <div className="_feed_right_inner_area_card_ppl_box">
                              <div className="_feed_right_inner_area_card_ppl_image">
                                <Link href="/profile">
                                  <Image src={friend.image} alt={friend.name} width={40} height={40} className="_box_ppl_img" />
                                </Link>
                              </div>
                              <div className="_feed_right_inner_area_card_ppl_txt">
                                <Link href="/profile">
                                  <h4 className="_feed_right_inner_area_card_ppl_title">{friend.name}</h4>
                                </Link>
                                <p className="_feed_right_inner_area_card_ppl_para">{friend.title}</p>
                              </div>
                            </div>
                            <div className="_feed_right_inner_area_card_ppl_side">
                              {friend.active ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                  <rect width="12" height="12" x="1" y="1" fill="#0ACF83" stroke="#fff" strokeWidth="2" rx="6" />
                                </svg>
                              ) : (
                                <span>{friend.time}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="_mobile_navigation_bottom_wrapper">
        <div className="_mobile_navigation_bottom_list">
          <Link href="/feed" className="_mobile_navigation_bottom_link">Feed</Link>
          <button type="button" className="_mobile_navigation_bottom_link">Alerts</button>
          <Link href="/login" className="_mobile_navigation_bottom_link">Login</Link>
        </div>
      </div>
    </div>
  );
}
