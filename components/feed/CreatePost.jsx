import Image from "next/image";

export default function CreatePost() {
  return (
    <div className="_feed_inner_text_area _padd_t24 _padd_b24 _padd_r24 _padd_l24 _b_radious6">
      <div className="_feed_inner_text_area_box">
        <div className="_feed_inner_text_area_box_image">
          <Image
            src="/assets/images/txt_img.png"
            alt="Your avatar"
            width={40}
            height={40}
            className="_txt_img"
          />
        </div>

        <form className="_feed_inner_text_area_box_form">
          <textarea
            className="form-control _textarea"
            placeholder="What's on your mind?"
          />
          <label className="_feed_textarea_label">Share something with your friends</label>
        </form>
      </div>

      <div className="_feed_inner_text_area_bottom">
        <div className="_feed_inner_text_area_item">
          <button type="button" className="_feed_inner_text_area_bottom_photo_link">
            Photo
          </button>
          <button type="button" className="_feed_inner_text_area_bottom_photo_link">
            Video
          </button>
          <button type="button" className="_feed_inner_text_area_bottom_photo_link">
            Feeling
          </button>
        </div>

        <div className="_feed_inner_text_area_btn">
          <button type="button" className="_feed_inner_text_area_btn_link">
            <span>Post Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
